import { NavLink } from "react-router-dom";
// import { History, ChevronDown } from "lucide-react";

const links = ["Home", "My Memes", "Saved"];

export function Navbar() {
    return (
        <nav className="h-20 px-8 bg-[#05060D] border-b border-[#161A27] flex items-center justify-between text-sm">

            <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#C8FF2E] flex items-center justify-center">🙂</div>

                <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-lime-400 text-transparent bg-clip-text">
                        AI-Meme-Gen
                    </h1>

                    <p className="text-[10px] tracking-[0.25em] text-zinc-400">
                        Generate custom memes
                    </p>
                </div>
            </div>

            <div className="flex gap-10">
                {links.map(link => (
                    <NavLink
                        key={link}
                        to={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`}
                        className={({ isActive }) =>
                            `pb-2 border-b-2 ${isActive ? "border-lime-400 text-white" : "border-transparent text-zinc-500"}`
                        }
                    >
                        {link}
                    </NavLink>
                ))}
            </div>

            {/* <div className="flex items-center gap-4">

                <button className="h-12 px-5 rounded-full bg-[#0D1020] border border-[#24283A] flex items-center gap-2 text-white">
                    <History size={15} />
                    History
                </button>

                <div className="flex items-center gap-2">
                    <img
                        src="https://i.pravatar.cc/80"
                        className="w-11 h-11 rounded-full border-2 border-purple-500"
                    />

                    <ChevronDown size={16} className="text-zinc-400" />
                </div>

            </div> */}

        </nav>
    );
}