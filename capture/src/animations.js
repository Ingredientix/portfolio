
export const PageTransition = {
    hidden: {
        y: 300,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.25,
        }
    },
    exit: {

        opacity: 0,
        transition: {
            duration: 0.6,
        }
    }
};

export const TitleAnimation = {
    hidden: {
        y: 200
    },
    show: {
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
}

export const Fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.6,
        }
    }
}

export const Photo = {
    hidden: { scale: 1.5, opacity: 0, },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 0.6,
        },
    }
}

export const LineAnim = {
    hidden: {
        width: '0%',
    },
    show: {
        width: '100%',
        transition: {
            duration: 1.1,
        },
    }
}
export const FrameAnim = {
    hidden: {
        skew: '45deg',
        x: '-130%',
    },
    show: {
        skew: '0deg',
        x: '100%',
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
}
export const FrameContainer = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            ease: 'easeOut',
        },
    },
}