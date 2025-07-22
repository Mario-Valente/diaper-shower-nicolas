<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="title">🍼 Chá de Fraldas do Nicolas 💙</h1>
        <p class="subtitle">Ajude-nos a preparar a chegada do nosso pequeno príncipe</p>
      </div>
    </header>

    <!-- Family Section -->
    <section class="family-section">
      <div class="container">
        <div class="family-content">
          <div class="family-image">
            <img 
              src="/images/familia.svg" 
              alt="Família do Nicolas" 
              class="family-photo"
            />
          </div>
          <div class="family-info">
            <h2 class="family-title">Nossa História</h2>
            <p class="family-description">
              Somos <strong>Maria e João</strong>, e estamos muito felizes em compartilhar com vocês 
              a chegada do nosso primeiro filho, o <strong>Nicolas</strong>! 💙
            </p>
            <p class="family-description">
              Depois de muito amor e expectativa, nosso pequeno príncipe está chegando 
              para completar nossa família. Cada presente escolhido com carinho será 
              parte da jornada especial que estamos começando.
            </p>
            <div class="family-stats">
              <div class="stat-item">
                <span class="stat-icon">📅</span>
                <div class="stat-info">
                  <h4>Data Prevista</h4>
                  <p>Dezembro 2025</p>
                </div>
              </div>
              <div class="stat-item">
                <span class="stat-icon">👶</span>
                <div class="stat-info">
                  <h4>Nome</h4>
                  <p>Nicolas</p>
                </div>
              </div>
              <div class="stat-item">
                <span class="stat-icon">💙</span>
                <div class="stat-info">
                  <h4>Sexo</h4>
                  <p>Menino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <main class="main">
      <div class="container">
        <div class="products-grid">
          <div 
            v-for="product in products" 
            :key="product.id"
            class="product-card"
            @click="showQRCode(product)"
          >
            <div class="product-image">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="product-img"
              />
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-price">{{ product.price }}</p>
              <p class="product-description">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- QR Code Modal -->
    <div v-if="selectedProduct" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <button class="close-btn" @click="closeModal">✕</button>
        <div class="modal-content">
          <h3>{{ selectedProduct.name }}</h3>
          <div class="qr-code">
            <img 
              v-if="qrCodeDataUrl" 
              :src="qrCodeDataUrl" 
              alt="QR Code" 
              class="qr-image"
            />
            <div v-else class="qr-loading">
              <p>Gerando QR Code...</p>
            </div>
          </div>
          <p class="modal-description">
            Escaneie o QR code acima para presentear o Nicolas com {{ selectedProduct.name.toLowerCase() }}
          </p>
          <div class="pix-info">
            <p><strong>PIX:</strong> {{ selectedProduct.pixKey }}</p>
            <p><strong>Valor:</strong> {{ selectedProduct.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from '../composables/useProducts'

const {
  products,
  selectedProduct,
  qrCodeDataUrl,
  showQRCode,
  closeModal
} = useProducts()
</script>

<style>
@import '../assets/css/main.css';
</style>
