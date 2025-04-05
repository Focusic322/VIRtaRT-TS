type TestimonialProps = {
  title: string;
  img: string;
  testimonial: string;
}

export default function Testimonial({ title, img, testimonial }: TestimonialProps) {
  return (
    <div className="pt-serif-regular">
      <div className="flex items-center gap-2 pb-4">
        <div>
          <img src={img} alt="" className="w-[98px]"/>
        </div>
        <div className="grid items-center gap-2">
          <h4 className="text-xl text-yellow">{title}</h4>
          <span className="text-xl text-darkBlue">Паціент</span>
        </div>
      </div>
      <p className="text-lg text-darkGray">{testimonial}</p>
    </div>
  );
}
