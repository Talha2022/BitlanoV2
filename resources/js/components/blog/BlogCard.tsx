import { Link } from '@inertiajs/react';
import type { BlogPost } from '@/data/blog-posts';

/* ── Clock icon matching Webflow SVG ────────────────────────── */
export function ClockIcon() {
    return (
        <svg
            className="h-full w-full fill-current"
            viewBox="-40 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="m382.867188 157.378906 20.074218-20.074218c7.800782-7.800782 7.800782-20.449219 0-28.246094-7.800781-7.800782-20.445312-7.800782-28.246094 0l-20.074218 20.074218c-33.679688-28.0625-74.605469-45.015624-118.261719-48.984374v-40.199219h19.308594c11.03125 0 19.972656-8.945313 19.972656-19.976563s-8.941406-19.972656-19.972656-19.972656h-78.566407c-11.03125 0-19.972656 8.941406-19.972656 19.972656s8.941406 19.976563 19.972656 19.976563h19.308594v40.199219c-109.28125 9.9375-196.410156 101.742187-196.410156 215.464843 0 119.59375 96.777344 216.386719 216.386719 216.386719 119.589843 0 216.382812-96.777344 216.382812-216.386719 0-51.085937-17.59375-99.464843-49.902343-138.234375zm-166.484376 314.671875c-97.285156 0-176.4375-79.148437-176.4375-176.4375 0-97.285156 79.152344-176.433593 176.4375-176.433593 97.289063 0 176.4375 79.148437 176.4375 176.433593 0 97.289063-79.148437 176.4375-176.4375 176.4375zm92.566407-269c7.800781 7.800781 7.800781 20.449219 0 28.246094l-78.441407 78.441406c-7.800781 7.800781-20.449218 7.800781-28.246093 0-7.800781-7.800781-7.800781-20.449219 0-28.246093l78.4375-78.441407c7.800781-7.800781 20.449219-7.800781 28.25 0zm0 0"
            />
        </svg>
    );
}

export default function BlogCard({ post }: { post: BlogPost }) {
    const hasAuthor = Boolean(post.author);
    const hasReadTime = typeof post.readTime === 'number';

    return (
        <div
            cb-indexing-group="blogitem"
            role="listitem"
            className="blg-lst__collection-item w-dyn-item h-full"
        >
            <Link
                href={post.href || `/blog/${post.slug}`}
                className="blg-lst__block group flex h-full flex-row overflow-hidden rounded-[4px] bg-[#1f1f1f] no-underline transition-colors duration-500 hover:bg-[#252525] max-md:min-h-[110px] md:flex-col"
            >
                {/* Image */}
                <div className="blg-lst__img-container relative shrink-0 overflow-hidden bg-white/10 max-md:w-[35%] max-sm:w-[32%] md:w-full">
                    <div className="blg-lst__img-block relative h-full w-full max-md:h-full max-md:pt-0 md:pt-[65%]">
                        <img
                            loading="lazy"
                            alt={post.title}
                            src={post.img}
                            srcSet={post.srcset}
                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 88vw, 53vw"
                            className="blg-lst__img absolute inset-0 h-full w-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-[1.04]"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="blg-lst__content-wrapper relative z-[8] flex flex-1 flex-col justify-between bg-[#1f1f1f] p-4 sm:p-5 max-md:justify-center">
                    {/* Hover overlay */}
                    <div className="blg-lst__hover-overlay pointer-events-none absolute top-0 right-0 left-0 -mb-[1px] h-5 bg-[#1f1f1f] transition-transform duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-1 max-md:hidden" />

                    {/* Text wrapper */}
                    <div className="blg-lst__text-wrapper relative z-10 flex flex-col transition-transform duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-1 max-md:mb-0 max-md:w-full md:mb-10 md:w-[80%] lg:w-[85%]">
                        {post.category && (
                            <div className="blg-lst__preheading-wrapper mb-1 max-w-full">
                                <h6 className="blg-lst__preheading m-0 text-sm font-normal leading-[1.2] text-[#9d9d9d] max-md:text-xs">
                                    {post.category}
                                </h6>
                            </div>
                        )}
                        <h4 className="blg-lst__heading m-0 text-[18px] font-medium leading-[1.1] tracking-[-0.03em] text-[#fffffff5] sm:text-[20px] md:text-[22px] lg:text-[26px]">
                            {post.title}
                        </h4>
                    </div>

                    {/* Meta info pills */}
                    {(hasAuthor || hasReadTime) && (
                        <div className="blg-lst__info-wrapper mt-auto hidden flex-wrap items-center gap-1 text-[12px] transition-transform duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:-translate-y-1 md:flex">
                            {hasAuthor && (
                                <div className="blg-lst__info__block flex items-center gap-1 rounded-full bg-[#ffffff1f] px-3.5 py-1.5 text-xs text-[#fffffff5]">
                                    {post.authorAvatar && (
                                        <img
                                            alt={post.author || ''}
                                            loading="lazy"
                                            src={post.authorAvatar}
                                            className="blg-lst__info__img h-[18px] w-[18px] rounded-full bg-white/10 object-cover"
                                        />
                                    )}
                                    <div className="blg-lst__info__copy font-normal">
                                        {post.author}
                                    </div>
                                </div>
                            )}

                            {hasReadTime && (
                                <div className="blg-lst__info__block flex items-center gap-1 rounded-full bg-[#ffffff1f] px-3.5 py-1.5 text-xs text-[#fffffff5]">
                                    <div className="blg-lst__info__icon relative bottom-[0.03em] flex h-[0.9em] w-[0.9em] shrink-0 items-center justify-center">
                                        <ClockIcon />
                                    </div>
                                    <div className="blg-lst__info__copy flex items-center gap-0.5 font-normal">
                                        <span>{post.readTime}</span>
                                        <span>min</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </Link>
        </div>
    );
}

