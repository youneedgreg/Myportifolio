import Image from "next/image";

import about1 from "../../../public/images/about/about1.jpg";
import about2 from "../../../public/images/about/about2.jpg";
import about3 from "../../../public/images/about/about3.jpg";
import about4 from "../../../public/images/about/about4.jpg";
import about5 from "../../../public/images/about/about5.jpg";
import about6 from "../../../public/images/about/about6.jpg";
import Link from "next/link";

const Gallery = () => {
    return (
        <section className="py-2" data-oid="syfnhoe">
            <div className="-m-1 flex flex-wrap md:-m-2" data-oid="kidcx2q">
                <div className="flex w-1/2 flex-wrap" data-oid="e2r5.0e">
                    <div
                        className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="r635c.j"
                    >
                        <Link
                            href={about1.src}
                            target="_blank"
                            data-oid="nwl2._o"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about1}
                                data-oid="q31955s"
                            />
                        </Link>
                    </div>
                    <div
                        className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="01hd_q:"
                    >
                        <Link
                            href={about5.src}
                            target="_blank"
                            data-oid="wp7kd5m"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about5}
                                data-oid="ehgid47"
                            />
                        </Link>
                    </div>
                    <div
                        className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="fxfijbj"
                    >
                        <Link
                            href={about3.src}
                            target="_blank"
                            data-oid="gp8bym_"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about3}
                                data-oid="xvjaep2"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap" data-oid="ohxv01c">
                    <div
                        className="w-full cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="o3wp5-_"
                    >
                        <Link
                            href={about2.src}
                            target="_blank"
                            data-oid="tcrcinw"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about2}
                                data-oid="e4a0k0k"
                            />
                        </Link>
                    </div>
                    <div
                        className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="6q.kz47"
                    >
                        <Link
                            href={about6.src}
                            target="_blank"
                            data-oid="yqyl1fu"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about6}
                                data-oid="6t-ffuh"
                            />
                        </Link>
                    </div>
                    <div
                        className="w-1/2 cursor-pointer p-1 hover:opacity-90 md:p-2"
                        data-oid="c9g_6yw"
                    >
                        <Link
                            href={about4.src}
                            target="_blank"
                            data-oid="c6ntajd"
                        >
                            <Image
                                alt="gallery"
                                className="block h-full w-full rounded-2xl object-cover object-center"
                                src={about4}
                                data-oid="g61vv__"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
