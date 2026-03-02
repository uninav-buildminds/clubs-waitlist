type FormType = 'student' | 'organizer'

interface StudentPayload {
  email: string
  interests?: string
}

interface OrganizerPayload {
  email: string
  clubName: string
}

type Payload = StudentPayload | OrganizerPayload

const FORMS = {
  student: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfy_A33WFftx2Yw4z_eVFHu0IoripQB0oabziKSXI4IlgMqTA/formResponse',
    fields: {
      email: 'entry.804996293',
      interests: 'entry.32042037',
    },
  },
  organizer: {
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScIQ1FvI_kNp2P_hb6E2NIhehgIYhqAoHROhRpuwahsu65wtQ/formResponse',
    fields: {
      email: 'entry.632509483',
      clubName: 'entry.266998449',
    },
  },
} as const

export async function submitWaitlist(
  formType: FormType,
  payload: Payload,
): Promise<{ success: boolean }> {
  const form = FORMS[formType]
  const body = new URLSearchParams()

  body.append(form.fields.email, payload.email)

  if (formType === 'student' && 'interests' in payload && payload.interests) {
    body.append(FORMS.student.fields.interests, payload.interests)
  }

  if (formType === 'organizer' && 'clubName' in payload) {
    body.append(FORMS.organizer.fields.clubName, payload.clubName)
  }

  await fetch(form.url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })

  // Google Forms returns opaque response with no-cors, so we assume success
  return { success: true }
}
