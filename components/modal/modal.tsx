import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./navigation.module.scss";

function Modal() {
  return (
    <div id="{{$modal_id}}" className="modal_area modal_hidden">
      <div className="modal_window">
        <div className="modal_contents_wrapper">
          <div className="modal_close_button border">閉じるアイコン</div>
          <div className="modal_title border">テスト</div>
          <div className="modal_contents">
            テスト
            <div className="modal_submit_button_area border">
              <button
                type="submit"
                className="button form__button border modal_submit_button"
              >
                送信
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
