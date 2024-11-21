import {useEffect} from 'react';

type VisibilityObserverProps = {
    className: string;
    threshold?: number;
}

function VisibilityObserver({className, threshold = 0.1}: VisibilityObserverProps) {
    useEffect(() => {
        const elements = document.querySelectorAll(`.${className}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold}
        );

        elements.forEach((element) => observer.observe(element));

        const mutationObserver = new MutationObserver(() => {
            const newElements = document.querySelectorAll(`.${className}`);
            newElements.forEach((element) => observer.observe(element));
        });

        mutationObserver.observe(document.body, {childList: true, subtree: true});

        if (className == "un") {
            console.log("coucou 1")
        }

        return () => {
            elements.forEach((element) => observer.unobserve(element));
            mutationObserver.disconnect();
        };
    }, [className, threshold]);

    return null;
}

export default VisibilityObserver;