import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original:'images/astro.png',
        thumbnail:'images/astro.png',
        description:'Astrologian',
        originalHeight:'450px',
    },
    {
        original:'images/bard.png',
        thumbnail:'images/bard.png',
        description:'Bard',
        originalHeight:'450px',
    },
    {
        original:'images/blackmage.png',
        thumbnail:'images/blackmage.png',
        description:'Black Mage',
        originalHeight:'450px',
    },
    {
        original:'images/dancer.png',
        thumbnail:'images/dancer.png',
        description:'Dancer',
        originalHeight:'450px',
    },
    {
        original:'images/darkknight.png',
        thumbnail:'darkknight.png',
        description:'Dark Knight',
        originalHeight:'450px',
    },
    {
        original:'images/dragoon.png',
        thumbnail:'images/dragoon.png',
        description:'Dragoon',
        originalHeight:'450px',
    },
    {
        original:'images/gunbreaker.png',
        thumbnail:'images/gunbreaker.png',
        description:'Gunbreaker',
        originalHeight:'450px',
    },
    {
        original:'images/machinist.png',
        thumbnail:'images/machinist.png',
        description:'Machinist',
        originalHeight:'450px',
    },
    {
        original:'images/monk.png',
        thumbnail:'images/monk.png',
        description:'Monk',
        originalHeight:'450px',
    },
    {
        original:'images/ninja.png',
        thumbnail:'images/ninja.png',
        description:'Ninja',
        originalHeight:'450px',
    },
    {
        original:'images/paladin.png',
        thumbnail:'images/paladin.png',
        description:'Paladin',
        originalHeight:'450px',
    },
    {
        original:'images/reaper.png',
        thumbnail:'images/reaper.png',
        description:'Reaper',
        originalHeight:'450px',
    },
    {
        original:'images/redmage.png',
        thumbnail:'images/redmage.png',
        description:'Red Mage',
        originalHeight:'450px',
    },
    {
        original:'images/sage.png',
        thumbnail:'images/sage.png',
        description:'Sage',
        originalHeight:'450px',
    },
    {
        original:'images/samurai.png',
        thumbnail:'images/samurai.png',
        description:'Samurai',
        originalHeight:'450px',
    },
    {
        original:'images/scholar.png',
        thumbnail:'images/scholar.png',
        description:'Scholar',
        originalHeight:'450px',
    }
    ,
    {
        original:'images/summoner.png',
        thumbnail:'images/summoner.png',
        description:'Summoner',
        originalHeight:'450px',
    },
    {
        original:'images/warrior.png',
        thumbnail:'images/warrior.png',
        description:'Warrior',
        originalHeight:'450px',
    },
    {
        original:'images/whitemage.png',
        thumbnail:'images/whitemage.png',
        description:'White Mage',
        originalHeight:'450px',
    }
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <p>This is an accumulation of the different jobs that a Final Fantasy XIV can obtain in the War and Magic categories.</p>

            <article class="gallery">
                <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;