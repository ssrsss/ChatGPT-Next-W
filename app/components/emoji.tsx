import Image from "next/image";
import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/black-bot.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  return `https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/15.0.1/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.avatar?.startsWith("1f3c2")) {
    return (
      <div className="no-dark">
        <Image
          src="/EMOJI-63.png"
          alt="Gemini Bot Icon"
          width={20}
          height={20}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f310")) {
    return (
      <div className="no-dark">
        <Image
          src="/网络关系图.png"
          alt="Gemini Bot Icon"
          width={40}
          height={40}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f9fe")) {
    return (
      <div className="no-dark">
        <Image
          src="/Pdf.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f467")) {
    return (
      <div className="no-dark">
        <Image
          src="/心-男男.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f921")) {
    return (
      <div className="no-dark">
        <Image
          src="/小丑.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f468-200d-1f3eb")) {
    return (
      <div className="no-dark">
        <Image
          src="/image_password_succeeded.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f396-fe0f")) {
    return (
      <div className="no-dark">
        <Image
          src="/广告.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f4ca")) {
    return (
      <div className="no-dark">
        <Image
          src="/图表.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f516")) {
    return (
      <div className="no-dark">
        <Image
          src="/ppt-ext.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
    if (props.avatar?.startsWith("1f4c8")) {
    return (
      <div className="no-dark">
        <Image
          src="/物理网络拓扑.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f4dd")) {
    return (
      <div className="no-dark">
        <Image
          src="/ico_医院管家_调查问卷.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f58d-fe0f")) {
    return (
      <div className="no-dark">
        <Image
          src="/订单 13.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f5f3-fe0f")) {
    return (
      <div className="no-dark">
        <Image
          src="/下降趋势.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f638")) {
    return (
      <div className="no-dark">
        <Image
          src="/027_编程.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f4dc")) {
    return (
      <div className="no-dark">
        <Image
          src="/翻译.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  if (props.avatar?.startsWith("1f50d")) {
    return (
      <div className="no-dark">
        <Image
          src="/搜索.png"
          alt="Gemini Bot Icon"
          width={30}
          height={30}
          className="user-avatar"
        />
      </div>
    );
  }
  
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <BlackBotIcon className="user-avatar" />
        ) : (
          <BotIcon className="user-avatar" />
        )}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
