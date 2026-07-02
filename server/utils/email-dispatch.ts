// server/utils/email-dispatch.ts
import nodemailer from 'nodemailer'

interface QuoteFormPayload {
  name: string
  email: string
  phone: string
  serviceType: string
  homeSize: string
  message: string
}

/**
 * Handles transporter initialization and multi-recipient email dispatch loops cleanly
 * utilizing config parameters context passed forward by the parent runtime wrapper.
 */
export const dispatchFormEmails = async (payload: QuoteFormPayload, config: any): Promise<boolean> => {
  // 1. SECURE SMTP GATEWAY INITIALIZATION
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465,
    secure: true, 
    auth: {
      user: config.emailUser || process.env.EMAIL_USER,
      pass: config.emailPass || process.env.EMAIL_PASS
    }
  })

  // 2. TIMELINE CONFIGURATIONS
  const clientSubject = `Quote Lock Confirmed: ${payload.serviceType} | FIT2PRO Operations`
  const adminSubject = `⚡ CRITICAL INTEL: Quote Field Request from ${payload.name}`
  const fromAlias = `FIT2PRO Operations <${config.noreplyAlias || process.env.NOREPLY_ALIAS}>`

  // Template HTML Layout (Dynamic structure built from input payload variables)
  const renderHtmlTemplate = (isAdmin: boolean): string => {
    const baseStyle = `font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #111827; background-color: #f9fafb; border-radius: 20px;`
    const headerStyle = `font-size: 24px; font-weight: 900; color: #111827; text-transform: uppercase; letter-spacing: -0.05em; margin-bottom: 20px;`
    const accentStyle = `color: #D4AF37;` 
    const boxStyle = `background-color: white; padding: 30px; border-radius: 16px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);`
    const fieldLabelStyle = `font-size: 11px; font-weight: 900; color: #111827; text-transform: uppercase; letter-spacing: 0.2em; display: block; margin-top: 15px; margin-bottom: 2px;`
    const fieldValueStyle = `font-size: 16px; color: #111827;`
    const footerStyle = `font-size: 11px; text-align: center; color: #6b7280; padding-top: 25px; font-family: monospace;`

    return `
      <div style="${baseStyle}">
        <div style="${headerStyle}">FIT2PRO <span style="${accentStyle}">OPERATIONS</span> MANUAL</div>
        
        <div style="${boxStyle}">
          <h2 style="font-size: 20px; font-weight: 800; margin-top: 0; color: #111827;">
            ${isAdmin ? `ACTIVE FIELD INTEL LOG:` : `TRANSMISSION CONFIRMED:`} ${payload.serviceType}
          </h2>
          <p style="font-size: 14px; color: #374151; margin-bottom: 25px;">
            ${isAdmin ? `A tactical deployment map request has been logged and initialized for immediate processing.` : `Thanks, ${payload.name.split(' ')[0]}! Your operational parameters have been received. Mike will reach out to schedule your deployment.`}
          </p>
          
          <span style="${fieldLabelStyle}">Client Name</span>
          <span style="${fieldValueStyle}">${payload.name}</span>

          <span style="${fieldLabelStyle}">${isAdmin ? `Direct Email Hook` : `Contact Email`}</span>
          <span style="${fieldValueStyle}">${payload.email}</span>

          <span style="${fieldLabelStyle}">Primary Phone</span>
          <span style="${fieldValueStyle}">${payload.phone}</span>

          <span style="${fieldLabelStyle}">Operational Loadout Needed</span>
          <span style="${fieldValueStyle}">${payload.serviceType}</span>

          <span style="${fieldLabelStyle}">Target Structure Size</span>
          <span style="${fieldValueStyle}">${payload.homeSize}</span>

          <span style="${fieldLabelStyle}">Directive Details Brief</span>
          <p style="${fieldValueStyle} background-color: #f3f4f6; padding: 15px; border-radius: 8px; font-style: italic;">"${payload.message}"</p>
          
          ${!isAdmin ? `<div style="text-align: center; margin-top: 30px;"><a href="tel:2033900297" style="background-color: #111827; color: white; padding: 12px 24px; border-radius: 8px; font-weight: 800; text-decoration: none; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">📞 Call Mike Directly</a></div>` : ''}
        </div>

        <div style="${footerStyle}">FIT2PRO Performance Systems • F2P Ops v1.0 • fit2pro.com</div>
      </div>
    `
  }

  // Text-only Fallback Template Layout
  const renderTextTemplate = (isAdmin: boolean): string => {
    return `
      ${isAdmin ? `FIT2PRO CRITICAL INTEL:\nNew Lead Logged` : `FIT2PRO OPERATIONS:\nTRANSMISSION CONFIRMED.`}\n
      A tactical quote request was received for: ${payload.serviceType}\n
      --- FIELD BRIEF ---\n
      Client: ${payload.name}\n
      Email: ${payload.email}\n
      Phone: ${payload.phone}\n
      Type: ${payload.serviceType}\n
      Size: ${payload.homeSize}\n
      Brief: "${payload.message}"\n
      --- END BRIEF ---\n
      ${isAdmin ? `Processed immediately.` : `Mike will reach out soon. Reply here to add intelligence.`}\n
      fit2pro.com
    `
  }

  try {
    // 3. PARALLEL DISPATCH EXECUTION TRACK
    await Promise.all([
      // A. OUTGOING TRANSMISSION: Customer Confirmed Receipt
      transporter.sendMail({
        from: fromAlias, 
        to: payload.email,
        subject: clientSubject,
        html: renderHtmlTemplate(false), 
        text: renderTextTemplate(false), 
        replyTo: config.adminEmail || process.env.ADMIN_EMAIL
      }),
      
      // B. OUTGOING TRANSMISSION: Admin Lead Intel Log
      transporter.sendMail({
        from: fromAlias, 
        to: config.adminEmail || process.env.ADMIN_EMAIL, 
        subject: adminSubject,
        html: renderHtmlTemplate(true), 
        text: renderTextTemplate(true), 
        replyTo: payload.email 
      })
    ])

    return true

  } catch (err) {
    console.error('SMTP Transmission service exception error:', err)
    return false
  }
}