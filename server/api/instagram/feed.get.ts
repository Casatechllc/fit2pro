export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const token = config.public.instagramAccessToken

  if (!token) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Instagram access token is missing in runtimeConfig'
    })
  }

  try {
    const response: any = await $fetch('https://graph.instagram.com/me/media', {
      query: {
        fields: 'id,caption,media_type,media_url,permalink,thumbnail_url,like_count,comments_count,comments{id,text,username,timestamp},children{id,media_type,media_url,thumbnail_url}',
        access_token: token
      }
    })

    if (!response?.data) return { videos: [], posts: [] }

    const processItem = (item: any) => {
      let directMp4 = item.media_url
      if (!directMp4 && item.children?.data) {
        const childVid = item.children.data.find((c: any) => c.media_type === 'VIDEO')
        if (childVid) directMp4 = childVid.media_url
      }

      const hasValidMp4 = !!directMp4 && !directMp4.includes('.jpg') && !directMp4.includes('.jpeg')

      // Safely extract comments array from nested payload
      const extractedComments = item.comments?.data || (Array.isArray(item.comments) ? item.comments : [])

      return {
        id: item.id,
        caption: item.caption || '',
        media_type: item.media_type,
        permalink: item.permalink || '',
        posterUrl: item.thumbnail_url || item.media_url || '',
        videoUrl: hasValidMp4 ? directMp4 : null,
        media_url: directMp4 || item.media_url || item.thumbnail_url || '',
        hasDirectMp4: hasValidMp4,
        like_count: item.like_count ?? 0,
        comments_count: item.comments_count ?? extractedComments.length,
        comments: extractedComments
      }
    }

    const posts = response.data.map(processItem)
    const videos = posts.filter((item: any) => item.media_type === 'VIDEO' || item.hasDirectMp4)

    return { posts, videos }
  } catch (err: any) {
    throw createError({
      statusCode: err?.statusCode || 500,
      statusMessage: err?.message || 'Failed to fetch Instagram feed'
    })
  }
})