"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { translations } from "./translations";

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

    const newLines: LogLine[] = [{ text: `harry@portfolio ~ % ${cmd}`, type: "input" }];

    switch (trimmed) {
      case "help":
        newLines.push(
          { text: t.cmdHelpTitle, type: "output" },
          { text: `  neofetch  - ${lang === "vi" ? "Hiển thị thông tin hệ thống & GitHub stats" : "Display system info & GitHub stats"}`, type: "output" },
          { text: `  skills    - ${lang === "vi" ? "Liệt kê kỹ năng lập trình với thanh tiến trình" : "List programming stack with progress bar"}`, type: "output" },
          { text: `  ping      - ${lang === "vi" ? "Kiểm tra kết nối mạng đến server" : "Ping server latency"}`, type: "output" },
          { text: `  clear     - ${lang === "vi" ? "Xóa lịch sử terminal" : "Wipe console history"}`, type: "output" }
        );
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "ping":
        newLines.push(
          { text: t.cmdPingStart, type: "output" },
          { text: `64 bytes from 103.82.21.9: icmp_seq=0 ttl=56 time=${(Math.random() * 20 + 5).toFixed(1)} ms`, type: "success" },
          { text: `64 bytes from 103.82.21.9: icmp_seq=1 ttl=56 time=${(Math.random() * 20 + 5).toFixed(1)} ms`, type: "success" },
          { text: "--- harrydev.vn ping statistics ---", type: "output" },
          { text: t.cmdPingLoss, type: "output" }
        );
        break;
      case "skills":
        newLines.push(
          { text: t.cmdSkillsTitle, type: "success" },
          { text: "  NestJS/NodeJS  [██████████████████░░] 90%", type: "output" },
          { text: "  TypeScript     [██████████████████░░] 90%", type: "output" },
          { text: "  React/Next.js  [████████████████░░░░] 80%", type: "output" },
          { text: "  Swift/SwiftUI  [██████████████░░░░░░] 70%", type: "output" },
          { text: "  Spring Boot    [██████████████░░░░░░] 70%", type: "output" },
          { text: "  Postgre/Mongo  [████████████████░░░░] 80%", type: "output" }
        );
        break;
      case "neofetch":
        newLines.push(
          {
            text: `
   /\\_/\\      harry@HarryOS
  ( o.o )     -------------
   > ^ <      󰣇 OS: macOS 16.2.6
              󰋜 Host: NextJS App Router
               Kernel: React 19.2.6
              󰔚 Uptime: 2 mins
               Shell: HarryTerminal v1.0
              
               GITHUB STATS:
              *  Username:  ${githubStats.username}
              *  Full Name: ${githubStats.name}
              *  Repos:     ${githubStats.repos}
              *  Followers: ${githubStats.followers}
              *  Stars:     ${githubStats.stars}
            `,
            type: "success",
          }
        );
        break;
      default:
        newLines.push({ text: lang === "vi" ? `Không tìm thấy lệnh: ${trimmed}. Gõ 'help' để xem danh sách.` : `Command not found: ${trimmed}. Type 'help' for options.`, type: "error" });
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
    <div className="w-full max-w-3xl overflow-hidden bg-[#24181a] p-5 text-[16px] font-nerd text-emerald-400/90 border-retro-double border-ochre shadow-retro-pixel rounded-sm">
      {/* Terminal Header Bar */}
      <div className="mb-4 flex items-center justify-between border-b-2 border-ochre/30 pb-3 font-retro">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 bg-terracotta border border-black/35 shadow-retro-pixel-sm" />
          <span className="h-3 w-3 bg-gold border border-black/35 shadow-retro-pixel-sm" />
          <span className="h-3 w-3 bg-sage border border-black/35 shadow-retro-pixel-sm" />
        </div>
        <span className="text-[11px] uppercase tracking-widest text-gold font-bold">
          {t.consoleHeader}
        </span>
        <div className="w-10" />
      </div>

      {/* Terminal Content Box */}
      <div
        ref={consoleContainerRef}
        className="h-80 overflow-y-auto space-y-2 pr-2 font-nerd text-[16px] leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap ${
              line.type === "input"
                ? "text-sand"
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
      <div className="mt-3 flex items-center gap-2 border-t-2 border-ochre/30 pt-3 font-nerd text-[16px]">
        <span className="text-gold font-bold">harry@arcade ~ %</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-sand outline-none caret-emerald-400 text-[16px]"
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
