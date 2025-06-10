'use client';
import { useReportWebVitals } from 'next/web-vitals';
import { useState } from 'react';
import { DataList, Heading, Status } from "@chakra-ui/react"
import { Tooltip } from '@/components/ui/tooltip';

type WebVital = {
  id: string;
  name: string;
  value: number;
  rating: string;
};

export function WebVitals() {
  const [metrics, setMetrics] = useState<WebVital[]>([]);

  useReportWebVitals((metric) => {
    setMetrics((prev) => {
      const exists = prev.some((m) => m.name === metric.name);
      return exists ? prev : [...prev, metric];
    });
  });

  return (
    <div>
      <Heading as="h2" size="md" marginBottom={2}>Web Vitals</Heading>
      <DataList.Root orientation="horizontal" gap={2} >
        {metrics.map((item) => (
          <DataList.Item key={item.name}>
            <DataList.ItemLabel>{item.name}</DataList.ItemLabel>
            <DataList.ItemValue>
              {item.value.toFixed(2)}
            </DataList.ItemValue>
            <DataList.ItemValue>
              <Tooltip content={item.rating} positioning={{ placement: "right" }}>
                <Status.Root
                  marginLeft={2}
                  colorPalette={item.rating === 'good' ? 'green' : item.rating === 'needs-improvement' ? 'yellow' : 'red'}
                >
                  <Status.Indicator />
                </Status.Root>
              </Tooltip>
            </DataList.ItemValue>
          </DataList.Item>
        ))}
      </DataList.Root>
    </div>
  );
}
