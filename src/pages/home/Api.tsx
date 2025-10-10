import { type PropsWithChildren } from "react";
import { GetSectionsCommand } from "../../api/commands/getSections.command";
import { useQuery } from "@tanstack/react-query";
import { useMirrorRegistry } from "./store";

const command = new GetSectionsCommand();

export default function Api(props: PropsWithChildren) {
  const { children } = props;

  const { data, isPending } = useQuery({
    queryKey: ["sections"],
    queryFn: () => command.execute(),
    refetchInterval: 1000 * 60,
  });

  useMirrorRegistry("data" , data!)
  useMirrorRegistry("loading" , isPending)

  return <>{children}</>;
}
