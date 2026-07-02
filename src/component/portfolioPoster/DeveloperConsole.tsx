"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { translations } from "./translations";
import { Junimo } from "./StardewSprites";

type LogLine = {
  text: string;
  type: "input" | "output" | "error" | "success";
};

export default function DeveloperConsole({ lang }: { lang: "vi" | "en" }) {
  const t = translations[lang];

  const [githubStats, setGithubStats] = useState({
    username: "NguyenTuan6678",
    name: "Harry Nguyen",
    followers: 12,
    repos: 9,
    stars: 3,
    loading: true,
  });

  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<LogLine[]>([]);

  // Dynamically set history when language changes
  useEffect(() => {
    const t = translations[lang];
    setHistory([
      { text: t.consoleInit, type: "success" },
      { text: t.consoleConnecting, type: "output" },
      { text: t.consoleConnected, type: "success" },
      { text: t.consoleHelpTip, type: "output" },
    ]);
  }, [lang]);

  const consoleContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch GitHub statistics
  useEffect(() => {
    async function fetchStats() {
      try {
        const userRes = await fetch("https://api.github.com/users/NguyenTuan6678");
        if (!userRes.ok) throw new Error("API Limit or Network Error");
        const userData = await userRes.json();

        const reposRes = await fetch("https://api.github.com/users/NguyenTuan6678/repos?per_page=100");
        let totalStars = 0;
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0);
        }

        setGithubStats({
          username: userData.login || "NguyenTuan6678",
          name: userData.name || "Harry Nguyen",
          followers: userData.followers || 12,
          repos: userData.public_repos || 9,
          stars: totalStars || 3,
          loading: false,
        });
      } catch (err) {
        // Fallback to static mock stats if Github API rate limits
        setGithubStats((prev) => ({ ...prev, loading: false }));
      }
    }
    fetchStats();
  }, []);

  // Scroll to bottom of terminal content on history change
  useEffect(() => {
    if (consoleContainerRef.current) {
      consoleContainerRef.current.scrollTop = consoleContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const promptText = `artisan@harry-farm ~ % ${cmd}`;
    const newLines: LogLine[] = [{ text: promptText, type: "input" }];

    switch (trimmed) {
      case "help":
        newLines.push(
          { text: t.cmdHelpTitle, type: "success" },
          { text: `  neofetch  - ${t.cmdHelpNeofetch}`, type: "output" },
          { text: `  skills    - ${t.cmdHelpSkills}`, type: "output" },
          { text: `  ping      - ${t.cmdHelpPing}`, type: "output" },
          { text: `  clear     - ${t.cmdHelpClear}`, type: "output" }
        );
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "ping":
        newLines.push(
          { text: t.cmdPingStart, type: "output" },
          { text: `64 bytes from 103.82.21.9: dispatch_seq=0 energy=270 latency=${(Math.random() * 15 + 5).toFixed(1)} ms`, type: "success" },
          { text: `64 bytes from 103.82.21.9: dispatch_seq=1 energy=270 latency=${(Math.random() * 15 + 5).toFixed(1)} ms`, type: "success" },
          { text: "--- mail.pelicantown.org ping statistics ---", type: "output" },
          { text: t.cmdPingLoss, type: "output" }
        );
        break;
      case "skills":
        newLines.push(
          { text: t.cmdSkillsTitle, type: "success" },
          { text: `  Farming (React/Next)   [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░] 80% (Level 8)`, type: "output" },
          { text: `  Mining (Spring Boot)   [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░] 80% (Level 8)`, type: "output" },
          { text: `  Foraging (NestJS/TS)   [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░] 80% (Level 8)`, type: "output" },
          { text: `  Fishing (Swift/iOS)    [▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░] 60% (Level 6)`, type: "output" },
          { text: `  Combat (Docker/DB)     [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░] 80% (Level 8)`, type: "output" }
        );
        break;
      case "neofetch":
        newLines.push(
          {
            text: `
    _/_\\_     artisan@HarryFarm
   ( o.o )    -----------------
    > ^ <     󰣇 OS: StardewOS v2.6
              󰋜 Engine: NextJS v16
               Crop: TypeScript & Java
              󰔚 Uptime: Year 2, Autumn
               Tool: DwarfConsole v1.0
              
               HARVESTED REPO STATS:
              *  Username:  ${githubStats.username}
              *  Name:      ${githubStats.name}
              *  Repos:     ${githubStats.repos}
              *  Followers: ${githubStats.followers}
              *  Stars:     ${githubStats.stars}
            `,
            type: "success",
          }
        );
        break;
      default:
        newLines.push({ 
          text: lang === "vi" 
            ? `Không tìm thấy mật lệnh: ${trimmed}. Nhập 'help' để dò cứu.` 
            : `Mnemonic not found: ${trimmed}. Type 'help' for instructions.`, 
          type: "error" 
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="relative w-full max-w-3xl overflow-hidden bg-[#1c1214] p-5 text-[15px] font-nerd text-[#a7f070] border-4 border-[#5c3e29] outline-4 outline-[#2d231e] shadow-2xl rounded-sm">
      
      {/* Decorative coal ores / Dwarf miner Junimo sitting on top-right */}
      <div className="absolute top-0 right-8 z-30 -translate-y-2">
        <Junimo size={38} color="#a9533c" /> {/* Dark orange-red Junimo */}
      </div>

      {/* Terminal Header Bar */}
      <div className="mb-4 flex items-center justify-between border-b-2 border-[#5c3e29]/50 pb-3 font-retro">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 bg-terracotta border border-black/35 rounded-full" />
          <span className="h-3 w-3 bg-gold border border-black/35 rounded-full" />
          <span className="h-3 w-3 bg-sage border border-black/35 rounded-full" />
        </div>
        <span className="text-[11px] uppercase tracking-widest text-[#cfb088] font-bold">
          {t.consoleHeader}
        </span>
        <div className="w-10" />
      </div>

      {/* Terminal Content Box */}
      <div
        ref={consoleContainerRef}
        className="h-80 overflow-y-auto space-y-2 pr-2 font-nerd text-[15px] leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${
              line.type === "input"
                ? "text-[#fcf3d9]"
                : line.type === "error"
                ? "text-terracotta font-bold"
                : line.type === "success"
                ? "text-gold font-bold"
                : "text-sage"
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="mt-3 flex items-center gap-2 border-t-2 border-[#5c3e29]/50 pt-3 font-nerd text-[15px]">
        <span className="text-gold font-bold">artisan@harry-farm ~ %</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-[#fcf3d9] outline-none caret-[#a7f070] text-[15px]"
          placeholder={t.consoleInputPlaceholder}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
