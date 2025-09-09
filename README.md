Error: A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <Page>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
        <J attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
          <V attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange={true}>
            <script>
            <div className="min-h-dvh ...">
              <div>
              <a>
              <SiteHeader>
              <main id="main" className="relative z...">
                <Hero>
                  <section className="container ...">
                    <FloatingOrbs>
                      <div className="absolute i...">
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 69.81235749493382
-                             width: "89.1918px"
+                             height: 52.563053266995496
-                             height: "90.9756px"
+                             left: "75.7310981819906%"
-                             left: "81.8323%"
+                             top: "25.957292557658818%"
-                             top: "29.2706%"
                            }}
                            ref={function}
                          >
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 66.51937667147963
-                             width: "51.0137px"
+                             height: 136.94012017488183
-                             height: "88.1192px"
+                             left: "68.36020182158839%"
-                             left: "97.9232%"
+                             top: "99.22402573626282%"
-                             top: "90.8467%"
                            }}
                            ref={function}
                          >
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 94.96927974193815
-                             width: "119.977px"
+                             height: 51.4226803540385
-                             height: "129.584px"
+                             left: "57.73647890698225%"
-                             left: "4.49735%"
+                             top: "82.50660017906559%"
-                             top: "78.7793%"
                            }}
                            ref={function}
                          >
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 86.92222441371243
-                             width: "105.464px"
+                             height: 92.1989994828382
-                             height: "109.794px"
+                             left: "72.48340300510586%"
-                             left: "75.3661%"
+                             top: "88.09609655580947%"
-                             top: "56.0186%"
                            }}
                            ref={function}
                          >
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 136.79421242376839
-                             width: "66.738px"
+                             height: 94.4265476088253
-                             height: "106.949px"
+                             left: "54.77138924119929%"
-                             left: "4.65159%"
+                             top: "59.81235972490544%"
-                             top: "45.249%"
                            }}
                            ref={function}
                          >
                        <motion.div className="absolute r..." style={{...}} animate={{x:[...],y:[...], ...}} ...>
                          <div
                            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-sm"
                            style={{
+                             width: 101.57020909348553
-                             width: "149.277px"
+                             height: 103.09774306580815
-                             height: "118.024px"
+                             left: "44.15969191601433%"
-                             left: "39.3264%"
+                             top: "33.949370684270086%"
-                             top: "48.2295%"
                            }}
                            ref={function}
                          >
                    ...
                ...
            ...
    ...

    at createUnhandledError (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/errors/console-error.js:27:71)
    at handleClientError (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/errors/use-error-handler.js:45:56)
    at console.error (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/components/globals/intercept-console-error.js:47:56)
    at eval (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:13502:19)
    at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:1511:30)
    at emitPendingHydrationWarnings (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:13501:9)
    at completeWork (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:13662:18)
    at runWithFiberInDEV (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:1514:13)
    at completeUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15256:19)
    at performUnitOfWork (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15137:11)
    at workLoopConcurrentByScheduler (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15114:9)
    at renderRootConcurrent (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15089:15)
    at performWorkOnRoot (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:14410:13)
    at performWorkOnRootViaSchedulerTask (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:16275:7)
    at MessagePort.performWorkUntilDeadline (webpack-internal:///(app-pages-browser)/./node_modules/next/dist/compiled/scheduler/cjs/scheduler.development.js:45:48)
    at div (<anonymous>)
    at useRender (webpack-internal:///(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/use-render.mjs:32:64)
    at MotionDOMComponent (webpack-internal:///(app-pages-browser)/./node_modules/framer-motion/dist/es/motion/index.mjs:90:87)
    at eval (webpack-internal:///(app-pages-browser)/./components/floating-orbs.tsx:14:99)
    at Array.map (<anonymous>)
    at FloatingOrbs (webpack-internal:///(app-pages-browser)/./components/floating-orbs.tsx:14:12)
    at Hero (webpack-internal:///(app-pages-browser)/./components/hero.tsx:33:88)
    at Page (rsc://React/Server/webpack-internal:///(rsc)/./app/page.tsx?10:124:104)