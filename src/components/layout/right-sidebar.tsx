import { getLeaderboardWithUsers } from "@/lib/adapters/content";
import { PodiumWidget } from "@/components/layout/podium-widget";
import { Card, CardContent } from "@/components/ui/card";

export function RightSidebar() {
  const rows = getLeaderboardWithUsers();

  return (
    <aside className="hidden w-[320px] shrink-0 space-y-4 xl:block">
      <Card className="animate-soft-float" style={{ animationDelay: "100ms" }}>
        <CardContent className="p-3">
          <PodiumWidget rows={rows} />
        </CardContent>
      </Card>

    </aside>
  );
}
