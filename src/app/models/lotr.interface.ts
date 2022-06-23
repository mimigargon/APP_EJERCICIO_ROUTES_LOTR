export  interface FooterInterface {
logo: ImageInterface;
links: LinkInterface[];
}

export interface HeroInterface {
    title: string; 
    text: string;
    image: ImageInterface;
}

export interface ImageInterface {
    src: string;
    alt: string;
}

export interface CharactersInterface {
    title: string;
    text: string;
    image: ImageInterface;
}

export interface GalleryInterface {
    title: string;
    gallery: ImageInterface [];
}

export interface RegisterInterface {
    username: string,
    password: string,
    rePassword: string; 
}

export interface LinkInterface {
    img: ImageInterface;
    text: string;
    link: string;
}
