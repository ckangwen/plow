import { SetupContext, ref } from "@vue/composition-api";
import { Message } from "element-ui";

export default function useCanNext(context: SetupContext, _canNext = false) {
  const canNext = ref(_canNext);

  const toNext = () => {
    if (canNext) {
      context.emit("next");
    } else {
      Message({
        message: "尚未通过校验",
        type: "warning"
      });
    }
  };

  return {
    canNext,
    toNext
  };
}
