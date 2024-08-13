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
          src="/erenn.png"
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
              Attack on Titan
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Engage yourself in the quest to exterminate Titans from the world with Eren Yeager!
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
          src="/lulu.png"
          alt="image 1"
          className="h-full w-full object-contain" style={{ objectPosition: '130% 20%' }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center " style={{background: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 100%)"}}>
          <div className="w-3/4 text-left left-20 absolute bottom-10 md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Code Geass
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Join a vengeful journey as Lelouch tries to destroy the world and build it anew in Code Geass!
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
    </Carousel>
  );
}