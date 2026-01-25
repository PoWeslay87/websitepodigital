const products = [
{
                    name: 'Netflix Premium',
                    logo: 'img/netflix.jpg',
                    plan: '1 Bulan',
                    price: 'Rp 45.000',
                    features: [
                        'Akun private (1 profil)',
                        'Aman & stabil',
                        'Garansi masa aktif',
                    ],
                },

                // Canva
                {
                    name: 'Canva Pro',
                    logo: 'img/canva.png',
                    plan: '1 Bulan',
                    price: 'Rp 25.000',
                    features: [
                        'Semua Fitur Pro',
                        'Template & Elemen Premium',
                        'Cocok untuk Bisnis',
                    ],
                },

                // CapCut - 2 Paket Terpisah
                {
                    name: 'CapCut Pro',
                    logo: 'img/capcut.png',
                    plan: '7 Hari',
                    price: 'Rp 20.000',
                    features: [
                        'Private akun',
                        'Akses Fitur Pro',
                        'Tanpa Watermark',
                        'Full garansi',
                    ],
                },

                // Spotify
                {
                    name: 'Spotify Premium',
                    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png',
                    plan: '1 Bulan',
                    price: 'Rp 30.000',
                    features: [
                        'Bebas iklan',
                        'Download lagu',
                        'Audio High Quality',
                        'Garansi aktif',
                    ],
                },

                // ChatGPT
                {
                    name: 'AI Chat GPT+',
                    logo: 'img/chatgpt-logo.png',
                    plan: '1 Bulan',
                    price: 'Rp 35.000',
                    features: ['Email Sendiri', 'Full Garansi', 'Respon Cepat'],
                },

                // YouTube
                {
                    name: 'YouTube Premium',
                    logo: 'img/youtube.png',
                    plan: '1 Bulan',
                    price: 'Rp 25.000',
                    features: [
                        'Bebas iklan',
                        'YouTube Music Included',
                        'Support All Device',
                        'Garansi aktif',
                    ],
                },

                // WeTV
                {
                    name: 'WeTV',
                    logo: 'img/wetv.png',
                    plan: '1 Bulan',
                    price: 'Rp 40.000',
                    features: ['Konten VIP', 'Tanpa Iklan', 'Kualitas HD'],
                },

                {
                    name: 'Viu Anti Limit',
                    logo: 'img/viu1.png',
                    plan: '12 Bulan',
                    price: 'Rp 55.000',
                    features: [
                        'Tanpa Iklan',
                        'Kualitas Full HD',
                        'Korean Drama Terbaru',
                    ],
                },

                // Vidio
                {
                    name: 'Vidio Platinum',
                    logo: 'img/vidio.png',
                    plan: '1 Bulan',
                    price: 'Rp 40.000',
                    features: [
                        'Login HP / TV',
                        'Liga, Film & Series',
                        'Garansi aktif',
                    ],
                },
    
                // Viu - 3 Paket Terpisah
                {
                    name: 'Viu Anti Limit',
                    logo: 'img/viu1.png',
                    plan: '3 Bulan',
                    price: 'Rp 20.000',
                    features: [
                        'Tanpa Iklan',
                        'Kualitas Full HD',
                        'Korean Drama Terbaru',
                    ],
                },

                // Prime Video
                {
                    name: 'Prime Video',
                    logo: 'img/prime.png',
                    plan: '1 Bulan',
                    price: 'Rp 25.000',
                    features: ['Private akun', 'Full garansi', 'All device'],
                },

                  {
                    name: 'Viu Anti Limit',
                    logo: 'img/viu1.png',
                    plan: '6 Bulan',
                    price: 'Rp 35.000',
                    features: [
                        'Tanpa Iklan',
                        'Kualitas Full HD',
                        'Korean Drama Terbaru',
                    ],
                },

                // GetContact
                {
                    name: 'Get Contact Premium',
                    logo: 'img/getcontact.png',
                    plan: '1 Bulan',
                    price: 'Rp 15.000',
                    features: [
                        'Wajib Nomor Standby',
                        'Bisa Perpanjang',
                        'OTP dari Admin',
                    ],
                },
                
                 {
                    name: 'CapCut Pro',
                    logo: 'img/capcut.png',
                    plan: '1 Bulan',
                    price: 'Rp 30.000',
                    features: [
                        'Private akun',
                        'Akses Fitur Pro',
                        'Tanpa Watermark',
                        'Full garansi',
                    ],
                },

            ]

            // Populate filter options
            function populateFilters() {
                const packageSet = new Set()
                const durationSet = new Set()

                products.forEach((product) => {
                    packageSet.add(product.name)
                    durationSet.add(product.plan)
                })

                const packageSelect = document.getElementById('filterPackage')
                const durationSelect = document.getElementById('filterDuration')

                Array.from(packageSet)
                    .sort()
                    .forEach((pkg) => {
                        const option = document.createElement('option')
                        option.value = pkg
                        option.textContent = pkg
                        packageSelect.appendChild(option)
                    })

                // Sort durasi dengan custom order
                const durationOrder = [
                    '7 Hari',
                    '1 Bulan',
                    '2 Bulan',
                    '3 Bulan',
                    '6 Bulan',
                    '12 Bulan',
                ]
                const sortedDurations = Array.from(durationSet).sort((a, b) => {
                    return durationOrder.indexOf(a) - durationOrder.indexOf(b)
                })

                sortedDurations.forEach((dur) => {
                    const option = document.createElement('option')
                    option.value = dur
                    option.textContent = dur
                    durationSelect.appendChild(option)
                })
            }

            // Render products
            function renderProducts(filteredProducts = products) {
                const productGrid = document.getElementById('product-grid')
                const noResults = document.getElementById('no-results')

                productGrid.innerHTML = ''

                if (filteredProducts.length === 0) {
                    productGrid.classList.add('hidden')
                    noResults.classList.remove('hidden')
                    return
                }

                productGrid.classList.remove('hidden')
                noResults.classList.add('hidden')

                filteredProducts.forEach((product) => {
                    const card = document.createElement('div')
                    card.className =
                        'product-card rounded-3xl p-8 flex flex-col justify-between'

                    const waLink = `https://wa.me/6285387780731?text=Halo%20kak,%20saya%20mau%20pesan%20${encodeURIComponent(product.name)}%20${encodeURIComponent(product.plan)}%20-%20${encodeURIComponent(product.price)},%20terima%20kasih`

                    const featureList = product.features
                        .map(
                            (f) => `
                        <li class="flex items-center text-gray-400 text-sm mb-2">
                            <i class="fas fa-check-circle text-blue-500 mr-2"></i> ${f}
                        </li>
                    `
                        )
                        .join('')

                    card.innerHTML = `
                    <div>
                        <div class="flex items-center mb-6">
                            <img src="${product.logo}" alt="${product.name}" class="h-10 w-auto object-contain mr-4">
                            <h3 class="text-xl font-bold">${product.name}</h3>
                        </div>
                        <ul class="mb-8">
                            ${featureList}
                        </ul>
                    </div>
                    <div>
                        <div class="mb-4">
                            <div class="flex justify-between items-center mb-3">
                                <span class="text-gray-400 text-sm font-medium">${product.plan}</span>
                                <span class="text-2xl font-bold text-blue-400">${product.price}</span>
                            </div>
                            <a href="${waLink}" target="_blank" class="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl transition font-bold text-sm transform hover:scale-105">
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                `
                    productGrid.appendChild(card)
                })
            }

            // Filter function
            function filterProducts() {
                const selectedPackage =
                    document.getElementById('filterPackage').value
                const selectedDuration =
                    document.getElementById('filterDuration').value

                let filtered = products

                if (selectedPackage) {
                    filtered = filtered.filter(
                        (p) => p.name === selectedPackage
                    )
                }

                if (selectedDuration) {
                    filtered = filtered.filter(
                        (p) => p.plan === selectedDuration
                    )
                }

                renderProducts(filtered)
            }

            // Reset function
            function resetFilters() {
                document.getElementById('filterPackage').value = ''
                document.getElementById('filterDuration').value = ''
                renderProducts(products)
            }

            // Event listeners
            document
                .getElementById('searchBtn')
                .addEventListener('click', filterProducts)
            document
                .getElementById('resetBtn')
                .addEventListener('click', resetFilters)

            // Initialize
            populateFilters()
            renderProducts()

            // Hamburger menu
            const menuBtn = document.getElementById('menu-btn')
            const mobileMenu = document.getElementById('mobile-menu')
            const lines = document.querySelectorAll('.line')
            const navbar = document.getElementById('navbar')

            let open = false

            menuBtn.addEventListener('click', () => {
                open = !open

                if (open) {
                    mobileMenu.classList.remove('max-h-0', 'opacity-0')
                    mobileMenu.classList.add('max-h-[500px]', 'opacity-100')
                } else {
                    mobileMenu.classList.add('max-h-0', 'opacity-0')
                    mobileMenu.classList.remove('max-h-[500px]', 'opacity-100')
                }

                lines[0].classList.toggle('rotate-45')
                lines[0].classList.toggle('top-5')
                lines[1].classList.toggle('opacity-0')
                lines[2].classList.toggle('-rotate-45')
                lines[2].classList.toggle('top-5')
            })

            document.querySelectorAll('#mobile-menu a').forEach((link) => {
                link.addEventListener('click', () => {
                    open = false
                    mobileMenu.classList.add('max-h-0', 'opacity-0')
                    mobileMenu.classList.remove('max-h-[500px]', 'opacity-100')
                    lines[0].classList.remove('rotate-45', 'top-5')
                    lines[1].classList.remove('opacity-0')
                    lines[2].classList.remove('-rotate-45', 'top-5')
                })
            })

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-black')
                } else {
                    navbar.classList.remove('bg-black')
                }
            })