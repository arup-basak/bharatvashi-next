import React from "react";
import Image from "next/image";
import { ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import imageSample from "public/image.jpg";


interface Props {
  imageUrl?: string;
  contentString: string;
}

const PostComponent = (props: Props) => {
  return (
    <div className="p-2 m-2 border border-black rounded">
      <div>{props.contentString}</div>
      <div>
        <Image
          src={imageSample}
          alt={props.contentString}
          height={200}
          width={200}
          className="bg-cover bg-no-repeat"
        />
      </div>
      <div className="flex flex-row">
        <ArrowBigUp />
        <ArrowBigDown />
        <MessageCircle />
      </div>

      {/* {props.imageUrl && (
        <Image
          src={props.imageUrl}
          src={imageSample}
          alt={props.contentString}
          height={20}
          width={20}
        />
      )} */}
    </div>
  );
};

export default PostComponent;
