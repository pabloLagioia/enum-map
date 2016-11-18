# enum-map
Enum like key-value map

# How to use

```
const Enum from "enum-map";

const ACTIONS = Enum(
  "REMOVE_TODO",
  "CREATE_TODO"
);

...

switch (action.type) {

  case ACTIONS.REMOVE_TODO: {
    //remote todo
  }

  case ACTIONS.CREATE_TODO: {
    //create todo
  }

}

...
```