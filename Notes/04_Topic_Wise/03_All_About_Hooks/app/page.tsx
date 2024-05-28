import UseCallbackHook from "@/components/01_useCallbackHook/useCallbackHook";
import UseTransitionHook from "@/components/02_useTransitionHook/useTransitionHook";
import UseTransitionWithLazyLoading from "@/components/02_useTransitionHook/useTransition_with_LazyLoading/Home";
import UseDeferredValue from "@/components/03_useDeferredValue/useDeferredValueHook";
import UseLayoutEffectHook from "@/components/04_useLayoutEffectHook/useLayoutEffectHook";
import UseIdHook from "@/components/05_useIdHook/useIdHook";
import UseEffectEventHook from "@/components/06_useEffectEvent_Hook/useEffectEventHook";
import UseHookWithFetch from "@/components/07_use_Hook/01_use_with_fetch/useHook";
import UseFormStatusHook from "@/components/08_useFormStatus_Hook/useFormStatusHook";
import UseOptimisticHook from "@/components/09_useOptimistic_Hook/useOptimisticHook";

export default function Home() {
  return (
    <>
      {/* <UseCallbackHook /> */}
      {/* <UseTransitionHook /> */}
      {/* <UseTransitionWithLazyLoading /> */}
      {/* <UseDeferredValue /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseIdHook /> */}
      {/* <UseEffectEventHook /> */}
      {/* <UseHookWithFetch /> */}
      {/* <UseFormStatusHook /> */}
      <UseOptimisticHook />
    </>
  );
}
