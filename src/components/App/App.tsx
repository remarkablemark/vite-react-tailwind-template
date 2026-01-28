import { useState } from 'preact/hooks';

import brands from './brands';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex justify-center">
        {brands.map(({ alt, href, src }) => (
          <a href={href} rel="nofollow noopener" target="_blank">
            <img src={src} class="m-4 h-24 hover:drop-shadow-2xl" alt={alt} />
          </a>
        ))}
      </div>

      <h1 class="my-10 text-5xl font-bold">Vite + Preact + Tailwind</h1>

      <div class="p-8">
        <button
          class="rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-center text-sm font-medium text-slate-800 shadow-xs transition-all hover:border-slate-800 focus:border-slate-800 focus:bg-slate-50 active:border-slate-800 active:bg-slate-50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => setCount((count) => count + 1)}
          type="button"
        >
          count is {count}
        </button>

        <p class="my-4 text-slate-600">
          Edit <code class="font-[monospace]">src/components/App/App.tsx</code>{' '}
          and save to test HMR
        </p>
      </div>

      <p class="text-slate-400">
        Click on the Vite, Preact, and Tailwind logos to learn more
      </p>
    </>
  );
}
