export const useAssets = () => {
  const getImageUrl = (imagePath) => {
    // Remove a barra inicial se existir
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    
    // Em desenvolvimento, usar o caminho normal
    if (process.env.NODE_ENV === 'development') {
      return `/${cleanPath}`
    }
    
    // Em produção, usar o baseURL do GitHub Pages
    return `/diaper-shower-nicolas/${cleanPath}`
  }

  return {
    getImageUrl
  }
}
