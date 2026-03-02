type FormType = 'general' | 'student' | 'organizer'

interface GeneralPayload {
  email: string
}

interface StudentPayload {
  email: string
  interests?: string
}

interface OrganizerPayload {
  email: string
  clubName: string
}

type Payload = GeneralPayload | StudentPayload | OrganizerPayload

export async function submitWaitlist(
  formType: FormType,
  payload: Payload,
): Promise<{ success: boolean }> {
  // Placeholder: log and simulate a short network delay.
  // Replace with a real API call (e.g. POST to a Google Sheets webhook).
  console.log(`[waitlist] type="${formType}"`, payload)
  await new Promise((r) => setTimeout(r, 800))
  return { success: true }
}
