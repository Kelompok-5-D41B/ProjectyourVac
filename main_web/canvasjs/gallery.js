jQuery(document).ready(function () {
    $.getJSON("../Assets/Json/newResult.json", function (data) {
        createGallery("#nanogallery2", data)
    });
    $.getJSON("../Assets/Json/levels.json", function (data) {
        createGallery("#levelgallery", data)
    });
    $.getJSON("../Assets/Json/biomes.json", function (data) {
        createGallery("#biomegallery", data)
    });
    $.getJSON("../Assets/Json/kinds.json", function (data) {
        createGallery("#kindgallery", data)
    });
});

function createGallery(id, data) {
    console.log(data)
    jQuery(id).nanogallery2({

        // CONTENT SOURCE
        items: data,

        // KEYWORD FILTERING
        galleryFilterTags: true,
        galleryFilterTagsMode: 'multiple',

        // GALLERY AND THUMBNAIL LAYOUT
        thumbnailHeight: '300', thumbnailWidth: '500',
        thumbnailAlignment: 'fillWidth',
        galleryDisplayMode: 'fullContent',
        gallerySorting: 'random',
        galleryDisplayMode : 'moreButton',
        galleryDisplayMoreStep : 6,

        thumbnailGutterWidth: 10, thumbnailGutterHeight: 10,
        thumbnailBorderHorizontal: 2, thumbnailBorderVertical: 2,

        // DISPLAY ANIMATION
        galleryDisplayTransitionDuration: 1000,
        thumbnailDisplayTransition: 'scaleUp',
        thumbnailDisplayTransitionDuration: 300,
        thumbnailDisplayInterval: 15,

        // THUMBNAIL TOOLS & LABEL
        thumbnailLabel: { display: true, position: 'onBottomOverImage', hideIcons: true, titleFontSize: '1em', align: 'left', titleMultiLine: true, displayDescription: false },
        thumbnailToolbarImage: null,
        thumbnailToolbarAlbum: null,

        // THUMBNAIL HOVER ANIMATION
        thumbnailHoverEffect2: 'label_font-size_1em_1.5em|title_backgroundColor_rgba(255,255,255,0.34)_rgba(((35,203,153,0.8)|title_color_#000_#fff|image_scale_1.00_1.10_5000|image_rotateZ_0deg_4deg_5000',
        touchAnimation: true,
        touchAutoOpenDelay: 800,

        // GALLERY THEME
        galleryTheme: {
            thumbnail: { titleShadow: 'none', titleColor: '#fff', borderColor: '#fff' },
            navigationBreadcrumb: { background: '#3C4B5B' },
            navigationFilter: { background: '#003C3F', backgroundSelected: '#2E7C7F', color: '#fff' }
        },

        // DEEP LINKING
        locationHash: false,

    });
}