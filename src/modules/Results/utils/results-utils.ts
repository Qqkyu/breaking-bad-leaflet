import { SearchParamsType } from "library/common/constants/searchParams";
import { ResultsProps } from "modules/Results/index";
import { objects } from "library/common/constants/objects";

export function generateKey(type: SearchParamsType, obj: objects): string {
  const mainAttr = getMainAttr(type);
  return mainAttr + obj[mainAttr];
}

export function areEqual(
  prevProps: Readonly<React.PropsWithChildren<ResultsProps>>,
  nextProps: Readonly<React.PropsWithChildren<ResultsProps>>
): boolean {
  if (prevProps.type !== nextProps.type || prevProps.objects.length !== nextProps.objects.length) {
    return false;
  }
  const mainAttr = getMainAttr(prevProps.type);
  const prevIds = prevProps.objects.map((obj) => obj[mainAttr]).sort();
  const nextIds = nextProps.objects.map((obj) => obj[mainAttr]).sort();
  return prevIds.every((val, i) => val === nextIds[i]);
}

function getMainAttr(type: SearchParamsType): string {
  switch (type) {
    case SearchParamsType.Character:
      return "char_id";
    case SearchParamsType.Death:
      return "death_id";
    case SearchParamsType.Episode:
      return "episode_id";
    case SearchParamsType.Quote:
      return "quote_id";
  }
}
