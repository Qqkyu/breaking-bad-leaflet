import { SearchParamsType } from "library/common/constants/searchParams";
import { ResultsProps } from "modules/Results/index";

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

function getMainAttr(type: SearchParamsType) {
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
