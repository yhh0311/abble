import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0k3l5416',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: 'sk6YVXbrTDSsn9QSBQ6umH6bQdZ147RZ9crSx8uBJcCV0ZWAAGr5VqpqeahXTE3TAFA9SnzWE8U0czIQ051q25xyeR58WO0p7qjVVWtH20wIVsmRgqQF0ophg625tb3t4mpbnO0nR9GqZHYDPTvFlaeATKDS3NMo606JMGTiQYqx3JZUpkud',
  useCdn: false,
})