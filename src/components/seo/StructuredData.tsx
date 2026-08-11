export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Nocturne",
    description:
      "Preparação automotiva de alta performance: motor, suspensão, chassis e remap sob medida.",
    // url: "https://nocturnemotors.com.br",
    // image: "https://nocturnemotors.com.br/images/og-cover.jpg",
    priceRange: "$$$",
    // ajuste com os dados reais do negócio:
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sua Cidade",
      addressRegion: "UF",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.instagram.com/nocturne", // Exemplo
      "https://www.youtube.com/@nocturne", //Exemplo
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
