import * as React from "react";

// create react component with
// coolClick - normal function
// crazyClick - mouse event function

// CoolComponent

interface CoolComponentProps {
  coolClick: (a: string) => string;
  crazyClick: React.MouseEventHandler<
    HTMLDivElement
  >;
}

export function CoolComponent({
  coolClick,
  crazyClick
}: CoolComponentProps) {
  coolClick("hello");
  return (
    <div
      onClick={e =>
        coolClick(
          e.currentTarget.className
        )
      }
    >
      <div onClick={crazyClick}>
        Cool
      </div>
    </div>
  );
}
