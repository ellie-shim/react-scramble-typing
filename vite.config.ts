import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    dts({
      insertTypesEntry: true, // index.d.ts에 모든 타입 export
      rollupTypes: true, // 타입 파일 번들링 (트리쉐이킹)
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      // src/index.ts를 진입점으로 사용
      entry: path.resolve(__dirname, "src/index.ts"),
      // 브라우저에서 window.TypographyLib 형태로 접근 가능 (UMD 빌드용)
      name: "ReactScrambleTyping",
      // 출력 파일명: index.ts.js, index.umd.js
      fileName: (format) => `index.${format}.js`,
    },

    // React를 번들에 포함시키지 않음 (peerDependencies와 연동)
    rollupOptions: {
      // React를 외부 의존성으로 처리 (npm 패키지에 React 코드 안 들어감)
      external: ["react", "react-dom"],
      output: {
        // UMD 빌드에서 전역번수로 React 사용
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
