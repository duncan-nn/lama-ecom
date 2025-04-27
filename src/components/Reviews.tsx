import Image from "next/image";

const Reviews = async ({ productId }: { productId: string }) => {
//   const reviewRes = await fetch(
//     `https://api.fera.ai/v3/public/reviews?product.id=${productId}&public_key=${process.env.NEXT_PUBLIC_FERA_ID}`
//   );
//   const reviews = await reviewRes.json();

const reviews = [
    {
      id: "1",
      customer: {
        avatar_url: "/avatars/avatar1.png",
        display_name: "Emma Johnson",
      },
      rating: 5,
      heading: "Amazing product!",
      body: "Exceeded my expectations. Quality is top notch and shipping was fast.",
      media: [{ id: "m1", url: "/media/review1a.jpg" }],
    },
    {
      id: "2",
      customer: {
        avatar_url: "/avatars/avatar2.png",
        display_name: "Liam Smith",
      },
      rating: 4,
      heading: "Very good, but could be better",
      body: "Overall great, but I wish it came in more colors.",
      media: [],
    },
    {
      id: "3",
      customer: {
        avatar_url: "/avatars/avatar3.png",
        display_name: "Ava Martinez",
      },
      rating: 5,
      heading: "Loved it!",
      body: "Perfect for what I needed. Will buy again!",
      media: [{ id: "m3", url: "/media/review3a.jpg" }],
    },
    {
      id: "4",
      customer: {
        avatar_url: "/avatars/avatar4.png",
        display_name: "Noah Davis",
      },
      rating: 3,
      heading: "It's okay",
      body: "Not bad, but not worth the hype in my opinion.",
      media: [],
    },
    {
      id: "5",
      customer: {
        avatar_url: "/avatars/avatar5.png",
        display_name: "Sophia Lee",
      },
      rating: 5,
      heading: "Highly recommend",
      body: "Customer service was amazing and the product is fantastic.",
      media: [{ id: "m5", url: "/media/review5a.jpg" }],
    },
    {
      id: "6",
      customer: {
        avatar_url: "/avatars/avatar6.png",
        display_name: "James Anderson",
      },
      rating: 4,
      heading: "Good value for money",
      body: "Not perfect, but definitely worth the price.",
      media: [],
    },
    {
      id: "7",
      customer: {
        avatar_url: "/avatars/avatar7.png",
        display_name: "Mia Garcia",
      },
      rating: 2,
      heading: "Disappointed",
      body: "It looked better online. Quality could be better.",
      media: [{ id: "m7", url: "/media/review7a.jpg" }],
    },
    {
      id: "8",
      customer: {
        avatar_url: "/avatars/avatar8.png",
        display_name: "William Brown",
      },
      rating: 5,
      heading: "Top-notch!",
      body: "Exactly what I needed. Five stars all the way.",
      media: [],
    },
    {
      id: "9",
      customer: {
        avatar_url: "/avatars/avatar9.png",
        display_name: "Isabella Wilson",
      },
      rating: 4,
      heading: "Really nice",
      body: "Very stylish and functional. Would recommend.",
      media: [{ id: "m9", url: "/media/review9a.jpg" }],
    },
    {
      id: "10",
      customer: {
        avatar_url: "/avatars/avatar10.png",
        display_name: "Oliver Moore",
      },
      rating: 3,
      heading: "Just average",
      body: "It works, but I wasn't blown away by it.",
      media: [],
    },
  ];

  
  return reviews.map((review: any) => (
    <div className="flex flex-col gap-4" key={review.id}>
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image
          src={review.customer.avatar_url}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>{review.customer.display_name}</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Image src="/star.png" alt="" key={index} width={16} height={16} />
        ))}
      </div>
      {/* DESC */}
      {review.heading && <p>{review.heading}</p>}
      {review.body && <p>{review.body}</p>}
      <div className="">
        {review.media.map((media: any) => (
          <Image
            src={media.url}
            key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  ));
};

export default Reviews;
