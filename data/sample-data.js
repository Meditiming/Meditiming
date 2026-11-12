/* MediTiming 가상 데이터.
   data/sample-data.json과 같은 내용이다. 파일을 더블클릭해 연 화면은 .json을 직접 읽지 못해서,
   앱(medication.html)은 이 .js 파일을 읽는다. 한쪽을 고치면 다른 쪽도 같이 고친다.
   모든 값은 지어낸 예시이며 실제 사람, 실제 약, 실제 복약 정보가 아니다. */
window.MEDITIMING_SAMPLE = {
  "_설명": "MediTiming 화면에 쓰는 가상 데이터입니다. 모든 값은 지어낸 예시이며 실제 사람, 실제 약, 실제 복약 정보가 아닙니다.",
  "referenceDate": "2026-11-12",
  "user": {
    "name": "가상 사용자 1"
  },
  "guardian": {
    "name": "가상 보호자 1",
    "phone": "000-0000-0000",
    "enabled": false,
    "after": 60
  },
  "meds": [
    {
      "id": "sample-01",
      "kind": "medicine",
      "name": "가상 약 1",
      "amount": 1,
      "unit": "알",
      "times": ["08:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-02",
      "kind": "medicine",
      "name": "가상 약 2",
      "amount": 2,
      "unit": "알",
      "times": ["08:00", "13:00", "19:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-03",
      "kind": "medicine",
      "name": "가상 약 3",
      "amount": 1,
      "unit": "알",
      "times": ["08:00", "19:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-04",
      "kind": "medicine",
      "name": "가상 약 4",
      "amount": 1,
      "unit": "포",
      "times": ["13:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-10",
      "end": "2026-11-16"
    },
    {
      "id": "sample-05",
      "kind": "medicine",
      "name": "가상 약 5",
      "amount": 5,
      "unit": "mL",
      "times": ["08:00", "22:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-10",
      "end": "2026-11-14"
    },
    {
      "id": "sample-06",
      "kind": "medicine",
      "name": "가상 약 6",
      "amount": 1,
      "unit": "알",
      "times": ["22:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-07",
      "kind": "medicine",
      "name": "가상 약 7",
      "amount": 2,
      "unit": "방울",
      "times": ["08:00", "13:00", "19:00", "22:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-11",
      "end": "2026-11-17"
    },
    {
      "id": "sample-08",
      "kind": "supplement",
      "name": "가상 영양제 1",
      "amount": 1,
      "unit": "알",
      "times": ["08:00"],
      "days": [1, 2, 3, 4, 5, 6, 0],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-09",
      "kind": "supplement",
      "name": "가상 영양제 2",
      "amount": 1,
      "unit": "알",
      "times": ["13:00"],
      "days": [1, 3, 5],
      "start": "2026-11-01",
      "end": null
    },
    {
      "id": "sample-10",
      "kind": "supplement",
      "name": "가상 영양제 3",
      "amount": 1,
      "unit": "포",
      "times": ["19:00"],
      "days": [6, 0],
      "start": "2026-11-01",
      "end": null
    }
  ]
};
