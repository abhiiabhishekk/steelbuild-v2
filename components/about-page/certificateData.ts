export type Certificate = {
  id: number;
  title: string;
  image: string;
  orientation: "portrait" | "landscape";
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Recognition Certificate",
    image: "/images/certificates/certificate-portrait-01.jpg",
    orientation: "portrait",
  },
  {
    id: 2,
    title: "Appreciation Certificate",
    image: "/images/certificates/certificate-portrait-02.jpg",
    orientation: "portrait",
  },
  {
    id: 3,
    title: "Recognition Certificate",
    image: "/images/certificates/certificate-landscape-01.jpg",
    orientation: "landscape",
  },
  {
    id: 4,
    title: "Appreciation Certificate",
    image: "/images/certificates/certificate-landscape-02.jpg",
    orientation: "landscape",
  },
  {
    id: 5,
    title: "Recognition Certificate",
    image: "/images/certificates/certificate-landscape-03.jpg",
    orientation: "landscape",
  },
  {
    id: 6,
    title: "Appreciation Certificate",
    image: "/images/certificates/certificate-portrait-03.jpg",
    orientation: "portrait",
  },
  {
    id: 7,
    title: "Recognition Certificate",
    image: "/images/certificates/certificate-landscape-04.jpg",
    orientation: "landscape",
  },
  {
    id: 8,
    title: "Appreciation Certificate",
    image: "/images/certificates/certificate-landscape-05.jpg",
    orientation: "landscape",
  },
  {
    id: 9,
    title: "Recognition Certificate",
    image: "/images/certificates/certificate-portrait-04.jpg",
    orientation: "portrait",
  },
];