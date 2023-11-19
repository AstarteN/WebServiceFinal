const compliments = [
    "Your art is so good, it could make a Monet blush.",
    "Your creativity is so off the charts, it could make Van Gogh spin in his grave.",
    "Your brushstrokes are so bold and confident, they could make Picasso jealous.",
    "Your sculptures are so unique and awe-inspiring, they could make Michelangelo ask for tips.",
    "Your color palette is so vibrant and alive, it could make Frida Kahlo want to collaborate with you.",
    "Your art is so expressive and full of emotion, it could make Klimt want to paint your portrait.",
    "Your compositions are so well-balanced and harmonious, they could make Da Vinci nod in approval.",
    "Your use of light and shadow is so masterful, it could make Rembrandt want to take lessons from you.",
    "Your ability to capture the essence of a subject is so uncanny, it could make Vermeer want to apprentice under you.",
    "Your art is so inspiring, it could make even the most jaded art critic want to believe in beauty again.",
    "You have a gift for seeing the world in a fresh and new way, and your art reflects that.",
    "Your art is so full of life, it could make even the most inanimate object come to life.",
    "Your passion for art is contagious, and it makes me want to create something beautiful too.",
    "Your art is so unique and original, it could never be duplicated.",
    "You are a true artist, and I am so grateful that you share your gift with the world.",
    "Your art is a breath of fresh air in a world that often feels bland and uninspired.",
    "I am so proud to know you, and I can't wait to see what you create next.",
    "Your art is a treasure, and I am so lucky to have it in my life.",
  ];

export function getCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
  }