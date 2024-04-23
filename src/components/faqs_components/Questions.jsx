import React from "react";

const Questions = () => {
  const faqs = [
    {
      id: "1",
      question: "Question 1",
      answer:
        "Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.",
    },
    {
      id: "2",
      question: "Question 1",
      answer:
        "Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.",
    },
    {
      id: "3",
      question: "Question 1",
      answer:
        "Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.",
    },
    {
      id: "4",
      question: "Question 1",
      answer:
        "Feugiat dui tortor purus facilisis. Eget in ac egestas neque diam. Quam praesent congue nunc vulputate fermentum sodales nunc. Pellentesque massa ultricies lacinia ornare nibh dignissim neque. Posuere quis nibh lectus aliquam risus. Volutpat aenean tristique sapien sagittis vulputate. Blandit etiam ultricies et et elit. Aliquam cursus vulputate at tortor et vel massa. Neque vitae sit adipiscing nisl semper sed nibh. Nisi sed proin libero consequat turpis aliquet odio. Laoreet scelerisque placerat mauris purus dis dolor. Diam volutpat eleifend risus sed sem in. Purus magna in sit gravida massa vehicula integer dui elementum. Habitasse morbi arcu sed et. Orci in ut eu sit ipsum condimentum ultrices.",
    },
  ];
  return (
    <div class="w-[80%] mb-8 m-auto flex flex-col gap-2">
      {faqs.map((faq) => (
        <div key={faq.id} class="flex flex-col gap-2">
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
