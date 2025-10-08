

export const imgVariant = {
    hidden: {
      opacity: 0,
      y: -100,
      // scale : 0 , 
      transition: {
        duration: 1, 
        delay: 0.5 ,
        ease: [0.42, 0, 0.58, 1], 
      },
    },
    visible: {
      opacity: 1,
      y: 0, 
      // scale : 1 , 
      transition: {
        duration: 1,
        delay: 0.5 ,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
  