import UseCallbackHook from "@/components/01_useCallbackHook/useCallbackHook";
import UseTransitionHook from "@/components/02_useTransitionHook/useTransitionHook";
import UseTransitionWithLazyLoading from "@/components/02_useTransitionHook/useTransition_with_LazyLoading/Home";
import UseDeferredValue from "@/components/03_useDeferredValue/useDeferredValueHook";
import UseLayoutEffectHook from "@/components/04_useLayoutEffectHook/useLayoutEffectHook";

export default function Home() {
  return (
    <>
      {/* <UseCallbackHook /> */}
      {/* <UseTransitionHook /> */}
      {/* <UseTransitionWithLazyLoading /> */}
      {/* <UseDeferredValue /> */}
      <UseLayoutEffectHook />
    </>
  );
}
