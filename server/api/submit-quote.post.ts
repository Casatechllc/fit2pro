// server/api/submit-quote.post.ts
import { defineEventHandler, readBody, createError } from 'h3'
import { dispatchFormEmails } from '../utils/email-dispatch'

// Define the precise ingestion layout interface
interface QuoteFormPayload {
  name: string
  email: string
  phone: string
  serviceType: string
  homeSize: string
  message: string
}

export default defineEventHandler(async (event) => {
  // 1. Intake the incoming POST payload data stream
  const body = await readBody<QuoteFormPayload>(event)
  const { name, email, phone, serviceType, homeSize, message } = body

  // 2. Comprehensive structural data validation check
  if (!name || !email || !phone || !serviceType || !homeSize) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed. Required operational telemetry fields are missing.',
    })
  }

  // Sanitize variables cleanly to protect ingestion layers
  const sanitizedData = {
    name: name.trim().replace(/[<>]/g, ''),
    email: email.trim().toLowerCase(),
    phone: phone.trim().replace(/[^0-9-]/g, ''),
    serviceType: serviceType.trim(),
    homeSize: homeSize.trim(),
    message: message ? message.trim() : 'No additional field directives provided.'
  }

  // 3. Extract configured G Suite credentials natively from the Runtime Config pipeline
  const config = useRuntimeConfig()
  const emailUser = config.emailUser || process.env.EMAIL_USER
  const emailPass = config.emailPass || process.env.EMAIL_PASS
  const adminEmail = config.adminEmail || process.env.ADMIN_EMAIL
  const noreplyAlias = config.noreplyAlias || process.env.NOREPLY_ALIAS

  // Enforce an absolute gateway authentication check
  if (!emailUser || !emailPass || !adminEmail || !noreplyAlias) {
    console.error('CRITICAL: Server runtime configuration keys or .env mapping sequences are missing.')
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Mailer Configuration Error.',
    })
  }

  try {
    // 4. Pass sanitized parameters and active configuration context cleanly to the utility service
    const emailTransmissionSuccess = await dispatchFormEmails(sanitizedData, config)

    if (!emailTransmissionSuccess) {
      throw new Error('Email utility pipeline failed to complete dispatch track.')
    }

    // 5. Return standard JSON execution success indicators back to Nuxt VDOM loops
    return { success: true }

  } catch (error) {
    console.error('Critical internal server runtime error processing message pipeline:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Metabolic pipeline operational failure. Mailer exception thrown.',
    })
  }
})