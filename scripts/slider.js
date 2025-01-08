document.addEventListener("DOMContentLoaded", () => {
    const imageUrls = [
        'https://www.tvguide.com/a/img/resize/b5e55684406a06f89661caea92a03ebf5bbdfee7/catalog/provider/2/13/2-3d47854f91050a69fbe2d4ca8b983e51.jpg?auto=webp&fit=crop&height=675&width=1200',
        'https://images.iptv.rt.ru/images/c6tis0jir4sslltqgq5g.jpg',
        'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/902987/fAcog4vPGWQsJHW3NzwQOQ.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl5Ww3aCuHWDDdD0xTgPZWQ4ZxIoaGTXXFrg&s',
        'https://i0.wp.com/screenagewasteland.com/wp-content/uploads/2019/06/AmericanHistoryXFeatured.png?fit=1110%2C555&ssl=1'
    ];

    const swiperWrapper = document.getElementById("swiper-wrapper");

    imageUrls.forEach((url) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `<img src="${url}" alt="Image">`;
        swiperWrapper.appendChild(slide);
    });

    const swiper = new Swiper(".swiper-container", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
