import { getProfile } from "../(studio)/sanity/sanity.query";
import type { ProfileType} from"../../app/(studio)/studio/types/index"
import HeroSvg from "./icons/HeroSvg";
import Job from "@/app/(site)/components/job";


export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      <section>
        <HeroSvg />
      </section>
      <Job />
    </main>
  );
}