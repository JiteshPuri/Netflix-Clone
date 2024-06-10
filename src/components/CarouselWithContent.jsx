import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export function CarouselWithContent() {
  return (
    <Carousel className=" h-[600px]" loop='true'>
      <div className="relative h-full w-full">
        <img
          src="/Rock.png"
          alt="image 1"
          className="h-full w-full object-contain" style={{ objectPosition: '150% 20%' }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center " style={{background: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 100%)"}}>
          <div className="w-3/4 text-left left-20 absolute bottom-10 md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              WWE
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Watch the latest action from WWE as 'The Final Boss' The Rock tries to end 'The American Nightmare' Cody Rhodes' story!
            </Typography>
            <div className="flex justify-left gap-2">
              <Button size="lg" color="white " className=" bg-red-600 text-black rounded-full">
                Play
              </Button>
              <Button size="lg" color="white" variant="text">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/src/assets/Rock.png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/src/assets/Rock.png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}