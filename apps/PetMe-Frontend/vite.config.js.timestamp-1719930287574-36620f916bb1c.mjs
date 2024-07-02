// vite.config.js
import { defineConfig } from "file:///C:/Users/Md%20Sakeel%20Sadab/OneDrive/Desktop/PDF/Open_spurce_Projects/PetMe-Prods/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Md%20Sakeel%20Sadab/OneDrive/Desktop/PDF/Open_spurce_Projects/PetMe-Prods/apps/PetMe-Frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    rootDir: "./src",
    useAtomics: true,
    setupFiles: "./src/test/setup.jsx",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    coverage: {
      provider: "istanbul",
      dir: "./coverage",
      reporters: ["lcov", "text"],
      include: ["src/**/*.{js,jsx,ts,tsx}"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxNZCBTYWtlZWwgU2FkYWJcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxQREZcXFxcT3Blbl9zcHVyY2VfUHJvamVjdHNcXFxcUGV0TWUtUHJvZHNcXFxcYXBwc1xcXFxQZXRNZS1Gcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTWQgU2FrZWVsIFNhZGFiXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUERGXFxcXE9wZW5fc3B1cmNlX1Byb2plY3RzXFxcXFBldE1lLVByb2RzXFxcXGFwcHNcXFxcUGV0TWUtRnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL01kJTIwU2FrZWVsJTIwU2FkYWIvT25lRHJpdmUvRGVza3RvcC9QREYvT3Blbl9zcHVyY2VfUHJvamVjdHMvUGV0TWUtUHJvZHMvYXBwcy9QZXRNZS1Gcm9udGVuZC92aXRlLmNvbmZpZy5qc1wiOy8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyAqL1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW3JlYWN0KCldLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHJvb3REaXI6ICcuL3NyYycsXHJcbiAgICB1c2VBdG9taWNzOiB0cnVlLFxyXG4gICAgc2V0dXBGaWxlczogJy4vc3JjL3Rlc3Qvc2V0dXAuanN4JyxcclxuICAgIC8vIHlvdSBtaWdodCB3YW50IHRvIGRpc2FibGUgaXQsIGlmIHlvdSBkb24ndCBoYXZlIHRlc3RzIHRoYXQgcmVseSBvbiBDU1NcclxuICAgIC8vIHNpbmNlIHBhcnNpbmcgQ1NTIGlzIHNsb3dcclxuICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnaXN0YW5idWwnLFxyXG4gICAgICBkaXI6ICcuL2NvdmVyYWdlJyxcclxuICAgICAgcmVwb3J0ZXJzOiBbJ2xjb3YnLCAndGV4dCddLFxyXG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLntqcyxqc3gsdHMsdHN4fSddLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBO0FBQUE7QUFBQSxJQUdaLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLFdBQVcsQ0FBQyxRQUFRLE1BQU07QUFBQSxNQUMxQixTQUFTLENBQUMsMEJBQTBCO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K