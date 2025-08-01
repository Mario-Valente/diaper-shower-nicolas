import { ref, computed } from 'vue'
import QRCode from 'qrcode'

export const useProducts = () => {
  const selectedProduct = ref(null)
  const qrCodeDataUrl = ref('')
  const priceFilter = ref('all') // 'all', 'low', 'medium', 'high'

  // Função para obter URL da imagem
  const getImageUrl = (imagePath) => {
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    
    if (process.env.NODE_ENV === 'development') {
      return `/${cleanPath}`
    }
    
    return `/diaper-shower-nicolas/${cleanPath}`
  }

const products = ref([
    {
        id: 1,
        name: 'Kit Higiene',
        price: 'R$ 40,00',
        description: 'Kit higiene (tesoura e etc)',
        icon: '🧰',
        image: 'images/kit-higiene.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 2,
        name: 'Cadeira de Descanso',
        price: 'R$ 400,00',
        description: 'Cadeira de descanso confortável',
        icon: '🪑',
        image: 'images/cadeira-descanso.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 3,
        name: 'Babá Eletrônica',
        price: 'R$ 200,00',
        description: 'Babá eletrônica para monitoramento',
        icon: '📡',
        image: 'images/baba-eletronica.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 4,
        name: 'Trocador',
        price: 'R$ 100,00',
        description: 'Trocador prático para o bebê',
        icon: '🔄',
        image: 'images/trocador.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 5,
        name: 'Toalha Bebê',
        price: 'R$ 50,00',
        description: 'Toalha com capuz para bebê',
        icon: '🛁',
        image: 'images/toalha-bebe.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 6,
        name: 'Fralda de Pano',
        price: 'R$ 30,00',
        description: 'Fralda de pano reutilizável',
        icon: '🩲',
        image: 'images/fralda-pano.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 7,
        name: 'Almofada Amamentação',
        price: 'R$ 140,00',
        description: 'Almofada para amamentação confortável',
        icon: '🛏️',
        image: 'images/almofada-amamentacao.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 8,
        name: 'Babadores',
        price: 'R$ 40,00',
        description: 'Babadores para bebê',
        icon: '🦺',
        image: 'images/babadores.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 9,
        name: 'Tapete de Atividades',
        price: 'R$ 250,00',
        description: 'Tapete de atividades para bebê',
        icon: '🧸',
        image: 'images/tapete-atividades.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 10,
        name: 'Hidratante Bebê',
        price: 'R$ 30,00',
        description: 'Hidratante para pele do bebê',
        icon: '🧴',
        image: 'images/hidratante-bebe.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 11,
        name: 'Sabonete Bebê',
        price: 'R$ 20,00',
        description: 'Sabonete hipoalergênico para bebê',
        icon: '🧼',
        image: 'images/sabonete-bebe.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 12,
        name: 'Aspirador Nasal',
        price: 'R$ 50,00',
        description: 'Aspirador nasal para bebê',
        icon: '👃',
        image: 'images/aspirador-nasal.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 13,
        name: 'Mordedor',
        price: 'R$ 20,00',
        description: 'Mordedor de silicone',
        icon: '👶',
        image: 'images/mordedor.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 14,
        name: 'Macacão',
        price: 'R$ 80,00',
        description: 'Macacão confortável para bebê',
        icon: '👕',
        image: 'images/macacao.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 15,
        name: 'Fralda',
        price: 'R$ 60,00',
        description: 'Pacote de fraldas descartáveis',
        icon: '🩲',
        image: 'images/fralda.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    },
    {
        id: 16,
        name: 'Banheira',
        price: 'R$ 180,00',
        description: 'Banheira para bebê',
        icon: '🛁',
        image: 'images/banheira.jpg',
        qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
        pixKey: 'mariobarbosavalente@gmail.com'
    }
])

  // Produtos com URLs de imagens corretas
  const productsWithImages = computed(() => {
    return products.value.map(product => ({
      ...product,
      image: getImageUrl(product.image)
    }))
  })

  // Função para extrair valor numérico do preço
  const getNumericPrice = (priceString) => {
    return parseFloat(priceString.replace('R$', '').replace(',', '.').trim())
  }

  // Produtos filtrados por preço
  const filteredProducts = computed(() => {
    if (priceFilter.value === 'all') {
      return productsWithImages.value
    }

    return productsWithImages.value.filter(product => {
      const price = getNumericPrice(product.price)
      
      switch (priceFilter.value) {
        case 'low':
          return price <= 50
        case 'medium':
          return price > 50 && price <= 150
        case 'high':
          return price > 150
        default:
          return true
      }
    })
  })

  // Contadores para cada faixa de preço
  const priceRanges = computed(() => {
    const low = products.value.filter(p => getNumericPrice(p.price) <= 50).length
    const medium = products.value.filter(p => {
      const price = getNumericPrice(p.price)
      return price > 50 && price <= 150
    }).length
    const high = products.value.filter(p => getNumericPrice(p.price) > 150).length

    return { low, medium, high, total: products.value.length }
  })

  const setPriceFilter = (filter) => {
    priceFilter.value = filter
  }

  const showQRCode = async (product) => {
    selectedProduct.value = product
    
    try {
      // Gerar QR code como Data URL
      qrCodeDataUrl.value = await QRCode.toDataURL(product.qrCode, {
        width: 200,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
    } catch (error) {
      console.error('Erro ao gerar QR code:', error)
    }
  }

  const closeModal = () => {
    selectedProduct.value = null
    qrCodeDataUrl.value = ''
  }

  return {
    products: productsWithImages,
    filteredProducts,
    selectedProduct,
    qrCodeDataUrl,
    priceFilter,
    priceRanges,
    setPriceFilter,
    showQRCode,
    closeModal,
    getImageUrl
  }
}
