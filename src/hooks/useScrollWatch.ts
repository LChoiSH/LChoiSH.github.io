import { useEffect, useState } from 'react';

export interface WatchOption {
    observeTarget: Element | null;
    threshold: number | number[];
    persist: boolean;
    reverse: boolean;
    rootMargin?: string;
    root?: Element | Document | null;
}

const watchOption: WatchOption = {
    observeTarget: document.querySelector(".wrap"),
    threshold: 0.1,
    persist: false,
    reverse: false,
    rootMargin: undefined,
    root: typeof document === 'undefined' ? null : document,
};
const useScrollWatch = ({
                            observeTarget = watchOption.observeTarget,
                            threshold = watchOption.threshold,
                            persist = watchOption.persist,
                            reverse = watchOption.reverse,
                            rootMargin,
                            root,
                        }: Partial<WatchOption> = watchOption) => {
    const [scrollMoved, setScrollMoved] = useState(false);
    const [scrollMovedArray, setScrollMovedArray] = useState<boolean[]>([]);

    useEffect(() => {
        const $cpTop = observeTarget;

        if (!Array.isArray($cpTop)) return ;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setScrollMoved(reverse);
                    } else {
                        !persist && setScrollMoved(!reverse);
                    }
                },
                {
                    root,
                    threshold,
                    rootMargin,
                }
            );

            if ($cpTop) {
                observer.observe($cpTop);
            }

            return () => observer.disconnect();


    }, [observeTarget, root, persist, reverse, rootMargin, threshold]);

    return {
        // TODO strong typed needs can extract specific type from client
        scrollMoved: Array.isArray(observeTarget) ? scrollMovedArray : scrollMoved,
    };
};

export default useScrollWatch;
