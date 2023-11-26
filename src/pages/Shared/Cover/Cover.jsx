import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Welcome to your new home ! This modern and luxurious apartment offers a perfect blend of comfort, style, and convenience. Situated in the heart of Khulna , this residence provides easy access to local attractions, shopping, dining, and more.</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;