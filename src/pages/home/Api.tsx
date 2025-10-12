import { type PropsWithChildren } from "react";
import { GetSectionsCommand } from "../../api/commands/getSections.command";
import { useQuery } from "@tanstack/react-query";
import { useMirrorRegistry } from "./store";
import { GetBranchesCommand } from "../../api/commands/getBranches.command";

const sectionCommand = new GetSectionsCommand();
const branchesComand = new GetBranchesCommand();

export default function Api(props: PropsWithChildren) {
  const { children } = props;

  const { data, isPending } = useQuery({
    queryKey: ["sections"],
    queryFn: () => sectionCommand.execute(),
    refetchInterval: 1000 * 60,
  });

  const { data: branches } = useQuery({
    queryKey: ["branches"],
    queryFn: () => branchesComand.execute(),
    refetchInterval: 1000 * 60,
  });

  useMirrorRegistry("data", data!);
  useMirrorRegistry("loading", isPending);
  useMirrorRegistry("branches", branches!);

  return <>{children}</>;
}
