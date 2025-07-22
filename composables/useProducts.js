import { ref } from 'vue'
import QRCode from 'qrcode'

export const useProducts = () => {
  const selectedProduct = ref(null)
  const qrCodeDataUrl = ref('')

  const products = ref([
    {
      id: 1,
      name: 'Fraldas RN',
      price: 'R$ 45,00',
      description: 'Fraldas para recém-nascido',
      icon: '👶',
      image: '/images/fraldas.svg',
      qrCode: '00020126510014BR.GOV.BCB.PIX0129mariobarbosavalente@gmail.com5204000053039865802BR5925MARIO BARBOSA VALENTE NET6012SAO LEOPOLDO622605223mMR7yPG6M19APfJImZLJD6304EB63',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 2,
      name: 'Body Manga Longa',
      price: 'R$ 25,00',
      description: 'Body confortável para o bebê',
      icon: '👕',
      image: '/images/body.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540525.005802BR5913NICOLAS STORE6008BRASILIA62140510BODY_ML_RN63041235',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 3,
      name: 'Mamadeira',
      price: 'R$ 35,00',
      description: 'Mamadeira anti-cólica',
      icon: '🍼',
      image: '/images/mamadeira.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540535.005802BR5913NICOLAS STORE6008BRASILIA62140510MAMADEIRA63041236',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 4,
      name: 'Chupeta',
      price: 'R$ 15,00',
      description: 'Chupeta ortodôntica',
      icon: '🍭',
      image: '/images/chupeta.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540515.005802BR5913NICOLAS STORE6008BRASILIA62140510CHUPETA_RN63041237',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 5,
      name: 'Manta Bebê',
      price: 'R$ 60,00',
      description: 'Manta macia e quentinha',
      icon: '🛏️',
      image: '/images/manta.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540560.005802BR5913NICOLAS STORE6008BRASILIA62140510MANTA_BEBE63041238',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 6,
      name: 'Sabonete Bebê',
      price: 'R$ 20,00',
      description: 'Sabonete hipoalergênico',
      icon: '🧼',
      image: '/images/sabonete.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540520.005802BR5913NICOLAS STORE6008BRASILIA62140510SABONETE_BB63041239',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 7,
      name: 'Toalha Bebê',
      price: 'R$ 40,00',
      description: 'Toalha com capuz',
      icon: '🛁',
      image: '/images/toalha.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540540.005802BR5913NICOLAS STORE6008BRASILIA62140510TOALHA_BEBE63041240',
      pixKey: 'nicolas@exemplo.com'
    },
    {
      id: 8,
      name: 'Carrinho Bebê',
      price: 'R$ 450,00',
      description: 'Carrinho completo e seguro',
      icon: '🚼',
      image: '/images/carrinho.svg',
      qrCode: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-426614174000520400005303986540545.005802BR5913NICOLAS STORE6008BRASILIA62140510CARRINHO_BB63041241',
      pixKey: 'nicolas@exemplo.com'
    }
  ])

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
    products,
    selectedProduct,
    qrCodeDataUrl,
    showQRCode,
    closeModal
  }
}
