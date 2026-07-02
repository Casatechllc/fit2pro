// server/api/submit-application.post.ts
import { defineEventHandler, readBody, createError } from 'h3'
import nodemailer from 'nodemailer'

interface ApplicationPayload {
  email: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ApplicationPayload>(event)
  const { email } = body

  // 1. Validate incoming data payload integrity
  if (!email || !email.includes('@')) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid parameters. Please supply a valid target email signature.',
    })
  }

  const sanitizedEmail = email.trim().toLowerCase()

  // 2. Load private core system credential variables
  const config = useRuntimeConfig()
  const emailUser = config.emailUser || process.env.EMAIL_USER
  const emailPass = config.emailPass || process.env.EMAIL_PASS
  const adminEmail = config.adminEmail || process.env.ADMIN_EMAIL
  const noreplyAlias = config.noreplyAlias || process.env.NOREPLY_ALIAS

  if (!emailUser || !emailPass || !adminEmail || !noreplyAlias) {
    console.error('SYSTEM CONTEXT ERROR: Ingestion parameters are missing inside config arrays.')
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Application Mailer Config Map Interrupted.',
    })
  }

  // 3. Mount SMTP Transporter Architecture
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  })

  // 4. Construct Content Templates
  const fromAlias = `FIT2PRO Operations <${noreplyAlias}>`
  
  // HTML - Transmitted to the prospective client applicant
  const clientHtml = `
  <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 550px; margin: 0 auto; padding: 30px; color: #111827; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 24px;">
    <div style="font-size: 20px; font-weight: 900; color: #111827; text-transform: uppercase; letter-spacing: -0.03em; margin-bottom: 15px; border-bottom: 2px solid #4c1d95; padding-bottom: 10px;">
      FIT2PRO <span style="color: #D4AF37;">COACHING INTAKE</span>
    </div>
    <p style="font-size: 14px; line-height: 1.6; color: #374151;">
      Thanks for reaching out! To secure your spot inside Michael Billups' elite 1-on-1 coaching program, click the link below to fill out your quick onboarding application so we can review your goals. 
    </p>
    <p style="font-size: 14px; line-height: 1.6; color: #374151;">
      Mike will also be following up with you shortly via this email address to introduce himself and share a bit more information.
    </p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://fit2protraining.com/about#contact" style="background-color: #4c1d95; color: white; padding: 14px 28px; border-radius: 12px; font-weight: 800; text-decoration: none; font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; display: inline-block; box-shadow: 0 4px 6px rgba(76,29,149,0.2);">
        Fill Out Application Form
      </a>
    </div>
    <p style="font-size: 12px; color: #6b7280; font-style: italic; line-height: 1.5; background-color: #f9fafb; padding: 12px; border-radius: 8px;">
      "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." — 2 Timothy 1:7
    </p>
    <div style="font-size: 10px; font-family: monospace; text-align: center; color: #9ca3af; margin-top: 25px; border-top: 1px solid #f3f4f6; padding-top: 15px;">
      FIT2PRO Systems • Performance Team
    </div>
  </div>
`

  // HTML - Transmitted directly to Mike (Michael Billups / Admin)
  const adminHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; color: #ffffff; background-color: #0f071c; border-radius: 16px; border: 1px solid #4c1d95;">
      <div style="font-size: 18px; font-weight: 900; color: #D4AF37; text-transform: uppercase; margin-bottom: 15px;">
        ⚡ NEW APP TRIGGER SIGNALED
      </div>
      <p style="font-size: 13px; color: #e9d5ff; line-height: 1.5;">
        An athlete has submitted their primary email address requesting onboarding instructions.
      </p>
      <div style="background-color: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border-left: 3px solid #D4AF37; margin: 20px 0;">
        <span style="font-size: 10px; font-weight: 800; color: #a78bfa; uppercase; tracking-wider; display: block;">TARGET ACCOUNT SIGNAL</span>
        <a href="mailto:${sanitizedEmail}" style="font-size: 15px; color: #ffffff; font-weight: bold; text-decoration: underline;">${sanitizedEmail}</a>
      </div>
      <div style="font-size: 10px; color: #6b7280; font-family: monospace;">
        Timestamp tracking logged. Ingestion vector initialized natively.
      </div>
    </div>
  `

  try {
    // 5. Parallel outbound pipeline distribution
    await Promise.all([
      // Outbound Notification A: Direct to User Applicant Client
      transporter.sendMail({
        from: fromAlias,
        to: sanitizedEmail,
        subject: 'Your FIT2PRO Application Blueprint Ingestion Route',
        html: clientHtml,
        text: `FIT2PRO INTAKE:\nLaunch your application track to secure your 1-on-1 placement parameters here: https://fit2pro.com/apply \n"For the Spirit God gave us does not make us timid..." — 2 Timothy 1:7`,
        replyTo: adminEmail
      }),
      // Outbound Notification B: Direct to Mike (Owner Alert System)
      transporter.sendMail({
        from: fromAlias,
        to: adminEmail,
        subject: `⚡ ENGAGEMENT SIGNAL: Blueprint requested by ${sanitizedEmail}`,
        html: adminHtml,
        text: `FIT2PRO ADMIN ALERT:\nNew email blueprint request submitted from: ${sanitizedEmail}`,
        replyTo: sanitizedEmail
      })
    ])

    return { success: true }

  } catch (error) {
    console.error('Application signup email engine exception caught:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Standalone ingestion queue error. Logging failure parameters.',
    })
  }
})